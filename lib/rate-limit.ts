const rateMap = new Map<string, { count: number; resetAt: number }>();

const MAX_REQUESTS = 3;
const WINDOW_MS = 60 * 60 * 1000; // 1 Stunde

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) {
    return false;
  }

  entry.count += 1;
  return true;
}
