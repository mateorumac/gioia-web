const KEY = "gioia_cookie_consent_v1";

export function getConsent() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveConsent(analytics) {
  const consent = {
    necessary: true,
    analytics,
    updatedAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem(KEY, JSON.stringify(consent));
  } catch {}
  return consent;
}

export function hasConsented() {
  return getConsent() !== null;
}
