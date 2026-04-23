# Website Christian Pöhner

Persönliche Website für Christian Pöhner, Stadtrat in Landshut (Niederbayern). Digitale Visitenkarte ohne Wahlkampf-Charakter. Zwei Bereiche: öffentlicher Auftritt + privater Login-Bereich (Phase 2).

## Stack

- Next.js 16 App Router + TypeScript
- Tailwind CSS v4 (CSS-first `@theme`)
- nodemailer + SMTP (kein externer Maildienst)
- Phase 2: Auth.js v5 (Credentials, env-Passwort-Hash)

## Deployment

**Docker** (primär) — multi-stage Build auf `node:22-alpine`, `output: "standalone"` in next.config.ts.
Gehostet auf eigenem VPS mit nginx + Let's Encrypt.

Build-Artefakte: `.next/standalone` + `.next/static` + `public/` werden ins Runner-Image kopiert, Start via `node server.js` auf Port 3000.

**CI/CD:** GitHub Actions (`.github/workflows/docker-build.yml`) baut bei jedem Push auf `main` automatisch ein Docker-Image und pusht es nach ghcr.io.

**`.dockerignore`** vorhanden — hält `.git`, `node_modules`, `.next`, `.env*.local` u. a. aus dem Image raus.

**Wichtig – `NEXT_PUBLIC_BASE_PATH`:** `next.config.ts` liest `basePath` aus dieser Env-Variable (`|| ""`). Die GitHub Actions Pipeline übergibt sie als Build-Arg aus den Repository-Variables. Für Root-Deployment (`/`) muss die Variable leer oder nicht gesetzt sein — sonst stimmen alle Bildpfade (`/images/...`) nicht mehr.

## Phasen

- **Phase 1** (aktuell): Öffentliche Website — Startseite, Stadtrat, Kontakt, Impressum, Datenschutz
- **Phase 2**: Login + Private Notizen (Markdown via fs, Auth.js v5)
- **Phase 3**: Google Calendar Embed, optional OneDrive-Galerie

## DSGVO-Regeln (immer beachten)

- Kein Social-Media-Embed (nur Links zu `christian.poehner.la` auf Instagram & Facebook)
- Kein Google Fonts CDN zur Runtime (Fonts lokal einbinden)
- Kein reCAPTCHA oder externe Tracking-Dienste

## Projektstruktur

- `app/` — Next.js App Router Pages & Layouts
- `components/` — wiederverwendbare UI-Komponenten
- `content/` — zentrale Inhaltsdaten (`*.ts`)
- `lib/` — Hilfsfunktionen
- `public/` — statische Assets
- `middleware.ts` — Next.js Middleware (z. B. Auth-Schutz ab Phase 2)

## Env-Variablen (.env.local)

```
SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_TO
```
