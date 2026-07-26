import emailjs from '@emailjs/browser';

export interface EmailParams {
  name: string;
  email: string;
  service: string;
  message: string;
}

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_psfg45t',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_3kogghq',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YpoP93So1RABJGKjB',
};

// Initialize EmailJS with public key
try {
  if (EMAILJS_CONFIG.publicKey) {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }
} catch (e) {
  console.warn('[EmailJS Init Warning]', e);
}

export const validateEmailParams = (params: EmailParams): { isValid: boolean; error?: string } => {
  if (!params.name || !params.name.trim()) {
    return { isValid: false, error: 'Please enter your name.' };
  }
  
  if (!params.email || !params.email.trim()) {
    return { isValid: false, error: 'Please enter your email address.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(params.email.trim())) {
    return { isValid: false, error: 'Please enter a valid email address.' };
  }

  if (!params.service || !params.service.trim()) {
    return { isValid: false, error: 'Please select or specify a service.' };
  }

  if (!params.message || !params.message.trim()) {
    return { isValid: false, error: 'Please enter your project details or message.' };
  }

  return { isValid: true };
};

export const sendContactEmail = async (params: EmailParams): Promise<void> => {
  // Verify service ID exists
  if (!EMAILJS_CONFIG.serviceId || EMAILJS_CONFIG.serviceId.trim() === '') {
    console.error('[EmailJS Error] Service ID not found or invalid.');
    throw new Error('Unable to send your message. Please try again.');
  }

  if (!EMAILJS_CONFIG.templateId || EMAILJS_CONFIG.templateId.trim() === '') {
    console.error('[EmailJS Error] Template ID not found or invalid.');
    throw new Error('Unable to send your message. Please try again.');
  }

  if (!EMAILJS_CONFIG.publicKey || EMAILJS_CONFIG.publicKey.trim() === '') {
    console.error('[EmailJS Error] Public Key not found or invalid.');
    throw new Error('Unable to send your message. Please try again.');
  }

  // Validate fields
  const validation = validateEmailParams(params);
  if (!validation.isValid) {
    console.error('[EmailJS Validation Error]', validation.error);
    throw new Error(validation.error || 'Please fill in all required fields.');
  }

  // Exact template parameters required: name, email, service, message
  const templateParams = {
    name: params.name.trim(),
    email: params.email.trim(),
    service: params.service.trim(),
    message: params.message.trim(),
    // Standard template aliases for maximum template compatibility
    from_name: params.name.trim(),
    from_email: params.email.trim(),
    reply_to: params.email.trim(),
    to_name: 'Museer Ilyas',
    service_type: params.service.trim(),
  };

  console.log('[EmailJS] Sending email with config:', {
    serviceId: EMAILJS_CONFIG.serviceId,
    templateId: EMAILJS_CONFIG.templateId,
    publicKey: EMAILJS_CONFIG.publicKey,
    templateParams,
  });

  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    console.log('[EmailJS] Success response:', response);

    if (response.status === 200 || response.text === 'OK') {
      return;
    }

    throw new Error(`Unexpected EmailJS status: ${response.status} ${response.text}`);
  } catch (sdkError: any) {
    console.error('[EmailJS SDK Send Failed]:', sdkError);
    if (sdkError && typeof sdkError === 'object') {
      console.error('[EmailJS SDK Detailed Error]:', {
        status: sdkError.status,
        text: sdkError.text,
        message: sdkError.message,
        raw: sdkError,
      });
    }

    // Direct REST API fallback call to EmailJS endpoint
    try {
      console.log('[EmailJS] Trying REST API fallback...');
      const restResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          service_id: EMAILJS_CONFIG.serviceId,
          template_id: EMAILJS_CONFIG.templateId,
          user_id: EMAILJS_CONFIG.publicKey,
          template_params: templateParams,
        }),
      });

      if (restResponse.ok) {
        console.log('[EmailJS] REST API fallback success!');
        return;
      }

      const errorText = await restResponse.text();
      console.error('[EmailJS REST API Error]:', restResponse.status, errorText);
    } catch (restError) {
      console.error('[EmailJS REST API Network Error]:', restError);
    }

    throw new Error('Unable to send your message. Please try again.');
  }
};
