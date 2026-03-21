# Contentful Schema Plan

## 1) Content Type: `pageContent`

Use this for all page-level and shared copy.

Fields:

- `slug` (Short text, unique, required)
- `seoTitle` (Short text, optional)
- `seoDescription` (Long text, optional)
- `copy` (Object, required)

Create entries for these slugs:

- `global`
- `home`
- `about`
- `services`
- `gallery`
- `faq`
- `contact`
- `contact-success`
- `privacy-policy`
- `terms`

### Example `global.copy` JSON

```json
{
  "header": {
    "ariaLabel": "Primary",
    "mobile": {
      "openAria": "Open navigation menu",
      "closeAria": "Close navigation menu"
    },
    "navigation": [
      { "name": "Home", "path": "/" },
      { "name": "About", "path": "/about" },
      { "name": "Services", "path": "/services" },
      { "name": "Gallery", "path": "/gallery" },
      { "name": "FAQ's", "path": "/faq" },
      { "name": "Contact", "path": "/contact", "isPrimary": true }
    ]
  },
  "footer": {
    "brandName": "Project Plaster",
    "brandDescription": "Professional plastering across Norfolk & Suffolk. Clean preparation and a smooth finish.",
    "headings": {
      "navigation": "Navigation",
      "legal": "Legal",
      "contact": "Contact"
    },
    "navigation": [
      { "name": "Home", "href": "/" },
      { "name": "About", "href": "/about" },
      { "name": "Services", "href": "/services" },
      { "name": "Gallery", "href": "/gallery" },
      { "name": "FAQ's", "href": "/faq" },
      { "name": "Contact", "href": "/contact" }
    ],
    "legalLinks": [
      { "name": "Privacy Policy", "href": "/privacy-policy" },
      { "name": "Terms & Conditions", "href": "/terms" }
    ],
    "contactLinks": [
      { "name": "Call Jack on 07946 057841", "href": "tel:07946057841" },
      { "name": "Email jack@projectplaster.com", "href": "mailto:jack@projectplaster.com" }
    ],
    "bottom": {
      "copyright": "© 2026 Project Plaster. All rights reserved.",
      "location": "Based in Norwich, serving Norfolk & Suffolk."
    }
  }
}
```

### Example `home.copy` JSON

```json
{
  "seo": {
    "localBusinessDescription": "Plastering, re-skimming and plaster repairs for homes and businesses across Norwich, Norfolk and Suffolk."
  },
  "hero": {
    "eyebrow": "Plastering Services In Norwich, Norfolk & Suffolk",
    "titleLeading": "Plastering for homes and",
    "titleAccent": "businesses in Norfolk.",
    "description": "We handle fresh plastering, re-skimming and repairs, including the prep work. You get a smooth finish that is ready for painting.",
    "primaryCtaLabel": "Get a Free Quote",
    "primaryCtaHref": "/contact",
    "secondaryCtaLabel": "Find Out More",
    "secondaryCtaHref": "/about",
    "imageUrl": "/images/jack1.webp",
    "imageAlt": "Freshly plastered wall with smooth finish in Norwich home"
  },
  "steps": {
    "headingLeading": "Quality plastering you can",
    "headingAccent": "trust",
    "items": [
      { "name": "Prep done properly", "description": "Floors, carpets and surfaces protected before plastering begins. We work tidy." },
      { "name": "Clean and accurate plastering", "description": "Fresh plastering, re-skimming and patch repairs. Smooth finish ready to paint." },
      { "name": "Respect for your home", "description": "No mess, no shortcuts. We leave the space cleaner than we found it." },
      { "name": "Honest pricing", "description": "Send photos or book a visit. Clear pricing, no hiding extra charges." }
    ]
  },
  "galleryPreview": {
    "heading": "Recent Work",
    "intro": "A few examples of plastering projects completed across Norfolk and Suffolk.",
    "ctaLabel": "View Full Gallery",
    "ctaAria": "View the full plastering gallery"
  },
  "assurance": {
    "titleLine": "Professional plastering",
    "titleAccent": "across Norfolk and Suffolk",
    "body": "Professional plastering across Norwich, Norfolk & Suffolk. We prep properly, protect your space, and leave a clean finish that’s ready to paint.",
    "ctaLabel": "Get A Free Quote",
    "ctaHref": "/contact",
    "imageUrl": "/images/jack1.webp",
    "imageAlt": "Freshly plastered wall with smooth finish in Norwich home",
    "features": [
      { "name": "Full preparation", "description": "We protect surfaces, mask edges, and leave every room spotless." },
      { "name": "Smooth finish", "description": "Our plastering is ready for painting when fully dried." },
      { "name": "Reliable and tidy", "description": "We arrive when we say we will and clean up properly before we leave." }
    ]
  },
  "location": {
    "titleLeading": "Based in",
    "titleAccent": "Norfolk",
    "paragraphOne": "We’re based in Norwich, working across Norfolk and Suffolk.",
    "paragraphTwo": "Whether it’s a small patch repair or a full re-skim, we turn up on time, work tidy, and leave a smooth finish that’s ready to paint.",
    "paragraphThree": "You will get a clear price upfront, with no hidden extras.",
    "mapTitle": "Project Plaster - Norwich, Norfolk"
  }
}
```

### Other `pageContent.copy` keys used

- `about`: `header.*`, `aboutHead.*`, `aboutProcess.*`, `cta.*`
- `services`: `hero.heading`, `hero.intro`, `serviceImageAltSuffix`, `cta.*`
- `gallery`: `heading`, `intro`, `aria.*`
- `faq`: `heading`, `intro`
- `contact`: `heading`, `intro`, `hero.*`, `form.*`, `details.*`, `map.*`
- `contact-success`: `heading`, `message`, `button.*`
- `privacy-policy`: `title`, `lastUpdated`, `bodyMarkdown`
- `terms`: `title`, `lastUpdated`, `bodyMarkdown`

## 2) Content Type: `service`

Fields:

- `title` (Short text, required)
- `description` (Short text, required)
- `content` (Long text, optional)
- `image` (Media, optional)
- `benefits` (Short text list, optional)
- `sortOrder` (Number, optional)

## 3) Content Type: `faq`

Fields:

- `question` (Short text, required)
- `answer` (Long text, required)
- `sortOrder` (Number, optional)

## 4) Environment Variables

```bash
CONTENTFUL_SPACE_ID=
CONTENTFUL_DELIVERY_ACCESS_TOKEN=
CONTENTFUL_ENVIRONMENT=master
CONTENTFUL_PAGE_CONTENT_TYPE=pageContent
CONTENTFUL_SERVICE_CONTENT_TYPE=service
CONTENTFUL_FAQ_CONTENT_TYPE=faq
```
