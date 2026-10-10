/**
 * ===================================================================
 * Translations Configuration
 * Add/edit translations here
 * ===================================================================
 */

const translations = {
    en: {
        // Navigation
        nav: {
            home: 'Home',
            beer: 'Beer',
            orders: 'Orders',
            merch: 'Merch',
            gallery: 'Gallery',
            contacts: 'Contact'
        },
        
        // Hero Section
        hero: {
            subtitle: 'Jebrewsalem',
            headline: 'American Pale Ale for Bars',
            btnTasting: 'Book a Tasting',
            btnExplore: 'Explore the Beer'
        },
        
        // Beer Section
        beer: {
            title: 'AMERICAN PALE ALE',
            subtitle: 'A light, refreshing, and easy-drinking craft beer<br>with a stable, proven recipe',
            btnPricing: 'View Pricing',
            name: 'Jebrewsalem APA 12°',
            style: 'APA',
            onTap: 'ALREADY ON TAP:',
            festivals: 'Also featured at festivals:',
            facts: {
                style: 'Style:',
                styleValue: 'American Pale Ale',
                abv: 'ABV:',
                abvValue: '5%',
                ibu: 'IBU:',
                ibuValue: '22',
                plato: 'Original Gravity:',
                platoValue: '12° Plato',
                taste: 'Taste:',
                tasteValue: 'light, refreshing, easy-drinking',
                hops: 'Hops:',
                hopsValue: 'Mosaic, Magnum',
                consistency: 'Flavor consistency:',
                consistencyValue: 'brewed for 2+ years, no experimental batches',
                delivery: 'Delivery format:',
                deliveryValue: '30L kegs'
            },
            untappdLabel: 'View on Untappd',
        },
        
        // Orders / Request Form Section
        orders: {
            title: 'Order & Event Request',
            subtitle: 'T-shirts, kegs, and event tap setups — tell us what you need.',
            direct: {
                title: 'Direct orders',
                description: 'Contact us to discuss orders, events and current availability.',
                feature1: 'Custom order enquiries welcome',
                feature2: 'Availability confirmed on request',
                feature3: 'Special packaging for events',
                btn: 'Contact us'
            },
            nearby: {
                title: 'Partner locations',
                description: 'Find Jebrewsalem at partner locations.',
                feature1: '5 partner locations',
                feature2: 'Availability varies by location',
                btn: 'Shop information'
            },
            typeLabel: 'What would you like to order?',
            type: {
                tshirt: 'T-shirt',
                keg: '30 L beer keg',
                tap: 'Beer with tap equipment'
            },
            fields: {
                name: 'Name *',
                email: 'Email *',
                phone: 'Phone *',
                comment: 'Comment',
                consent: 'I agree to the processing of my personal data for the purpose of handling this request.',
                consentLink: 'See our Privacy Policy',
                ageConfirm: 'I confirm that I am over 18 years old.',
                submit: 'Send request',
                selectPlaceholder: '— Select —',
                gender: 'Gender / fit',
                genderMale: 'Men',
                genderFemale: 'Women',
                genderUnisex: 'Unisex',
                size: 'Size',
                quantity: 'Quantity',
                beer: 'Beer',
                volume: 'Volume',
                kegsQty: 'Number of kegs',
                delivery: 'Pickup / delivery',
                deliveryPickup: 'Pickup',
                deliveryPrague: 'Delivery in Prague',
                deliveryDiscuss: 'Need to discuss',
                date: 'Preferred date',
                eventDate: 'Event date',
                eventLocation: 'Event location',
                people: 'Approx. number of people',
                kegsNeeded: 'How many 30 L kegs do you need?',
                setupNeeded: 'Do you need delivery / setup?',
                setupYes: 'Yes',
                setupNo: 'No',
                setupUnsure: 'Not sure'
            },
            errors: {
                required: 'This field is required.',
                email: 'Please enter a valid email address.',
                number: 'Please enter a positive number.',
                date: 'Please use DD.MM.YYYY format.',
                type: 'Please select a request type.'
            },
            success: 'Your request has been sent! We\'ll get back to you soon.',
            error: 'Please fill in all required fields correctly.'
        },
        
        // Merchandise Section
        merch: {
            title: 'Merchandise',
            subtitle: 'Jebrewsalem merchandise',
            tshirt: {
                label: 'T-shirt',
                name: 'Jebrewsalem T-shirt',
                price: '599 Kč'
            },
            glass: {
                label: 'Beer glass',
                name: 'Jebrewsalem beer glass',
                price: '150 Kč'
            },
            bag: {
                label: 'Shopper bag',
                name: 'Jebrewsalem shopper bag',
                price: '150 Kč'
            },
            ask: 'Ask about this item'
        },
        
        // Gallery Section
        gallery: {
            title: 'Gallery',
            subtitle: 'A visual journey through our craft'
        },
        
        // Contacts Section
        contacts: {
            title: 'Contact',
            subtitle: 'Contact Jebrewsalem s.r.o.',
            company: 'Company',
            reach: 'Contact',
            email: 'Email:',
            phone: 'Phone:',
            emailPurposes: 'For general, wholesale, event and press enquiries.',
            shopName: 'Beer Golem',
            shopOfficial: 'Official physical shop of Jebrewsalem',
            shopAddressNote: 'Shop address only; not a beer production facility.',
            shopAddress: 'Pohořelec 153/2, Prague 1, Czech Republic',
            shopHours: 'Sunday–Friday, 12:00–19:00. Saturday: closed.',
            shopLink: 'Visit the shop',
            mapsLink: 'Open in Google Maps'
        },
        
        // Footer
        footer: {
            tagline: 'Craft beer with soul',
            copyright: '© 2026 JEBREWSALEM. All rights reserved.',
            disclaimer: 'Drink responsibly. You must be 18+ to consume alcohol.'
        },

        // Keg Rental page
        kegRental: {
            title: 'Beer Keg Rental Prague | JEBREWSALEM',
            metaDesc: 'Rent a 30\u202fL Jebrewsalem APA 12° beer keg in Prague. Pickup or delivery by arrangement.',
            h1: 'Beer Keg Rental Prague',
            intro: 'Request a 30\u202fL keg of Jebrewsalem APA 12° for your event or party. Service is available in Prague.',
            whatTitle: 'What you get',
            whatDesc: 'A 30\u202fL keg of Jebrewsalem APA 12° \u2014 American Pale Ale (5\u202f% ABV, 22\u202fIBU). Available keg-only or keg\u202f+\u202ftap equipment.',
            beerSpecs: 'Jebrewsalem APA 12° \u2014 APA, 5\u202f% ABV, 22\u202fIBU',
            volume: 'Keg volume: 30\u202fL',
            formats: 'Available as keg-only or keg\u202f+\u202ftap equipment',
            detailsTitle: 'Rental details',
            deposit: 'Keg deposit',
            depositValue: '1\u202f000\u202fCZK (refundable)',
            leadTime: 'Lead time',
            leadTimeValue: 'As little as 12 hours',
            minOrder: 'Minimum order',
            minOrderValue: 'None',
            area: 'Service area',
            areaValue: 'Prague only',
            delivery: 'Delivery',
            deliveryValue: 'Pickup or delivery in Prague',
            ctaTitle: 'Ready to order?',
            ctaDesc: 'Fill out the order form on our homepage and select \u201c30\u202fL beer keg\u201d.',
            ctaBtn: 'Go to order form',
            contactTitle: 'Questions?',
            contactDesc: 'Contact us by email or phone.'
        },

        // Tap Rental page
        tapRental: {
            title: 'Beer Tap Rental Prague | JEBREWSALEM',
            metaDesc: 'Beer tap equipment rental for private parties, corporate events and celebrations in Prague.',
            h1: 'Beer Tap Rental Prague',
            intro: 'Beer tap setup with Jebrewsalem APA 12° for private parties, corporate events and celebrations in Prague.',
            whatTitle: 'What is included',
            whatDesc: 'A complete beer on tap solution: 30\u202fL keg(s) of Jebrewsalem APA 12° plus tap equipment.',
            beerSpecs: 'Jebrewsalem APA 12° \u2014 APA, 5\u202f% ABV, 22\u202fIBU',
            volume: 'Keg volume: 30\u202fL',
            equipment: 'Tap equipment included',
            detailsTitle: 'Service details',
            deposit: 'Equipment deposit',
            depositValue: '10\u202f000\u202fCZK (refundable)',
            leadTime: 'Lead time',
            leadTimeValue: 'As little as 12 hours',
            minOrder: 'Minimum order',
            minOrderValue: 'None',
            area: 'Service area',
            areaValue: 'Prague only',
            events: 'Suitable for',
            eventsValue: 'Private parties, corporate events, celebrations',
            ctaTitle: 'Ready to book?',
            ctaDesc: 'Fill out the order form on our homepage and select \u201cBeer with tap equipment\u201d.',
            ctaBtn: 'Go to order form',
            contactTitle: 'Questions?',
            contactDesc: 'Contact us by email or phone.'
        },

        // Cookie consent banner
        consent: {
            ariaLabel: 'Cookie preferences',
            title: 'Cookie preferences',
            text: 'We use essential storage to remember your language choice. With your consent, we also use optional analytics cookies to understand how visitors use our website and improve it.',
            policyLink: 'Privacy Policy',
            reject: 'Reject optional cookies',
            accept: 'Accept optional cookies'
        }
    },
    
    cs: {
        // Navigation
        nav: {
            home: 'Domů',
            beer: 'Pivo',
            orders: 'Objednávky',
            merch: 'Merch',
            gallery: 'Galerie',
            contacts: 'Kontakt'
        },
        
        // Hero Section
        hero: {
            subtitle: 'Jebrewsalem',
            headline: 'American Pale Ale pro bary',
            btnTasting: 'Rezervovat degustaci',
            btnExplore: 'Prozkoumat pivo'
        },
        
        // Beer Section
        beer: {
            title: 'AMERICAN PALE ALE',
            subtitle: 'Lehké, osvěžující a snadno pitelné řemeslné pivo<br>se stabilním, prověřeným receptem',
            btnPricing: 'Zobrazit ceny',
            name: 'Jebrewsalem APA 12°',
            style: 'APA',
            onTap: 'JIŽ NA ČEPU:',
            festivals: 'Také na festivalech:',
            facts: {
                style: 'Styl:',
                styleValue: 'American Pale Ale',
                abv: 'Alkohol:',
                abvValue: '5 %',
                ibu: 'IBU:',
                ibuValue: '22',
                plato: 'Původní stupňovitost:',
                platoValue: '12° Plato',
                taste: 'Chuť:',
                tasteValue: 'lehká, osvěžující, snadno pitelná',
                hops: 'Chmely:',
                hopsValue: 'Mosaic, Magnum',
                consistency: 'Stálost chuti:',
                consistencyValue: 'vařeno déle než 2 roky, bez experimentálních várek',
                delivery: 'Balení:',
                deliveryValue: '30l sudy'
            },
            untappdLabel: 'Zobrazit na Untappd',
        },
        
        // Orders / Request Form Section
        orders: {
            title: 'Objednávka / poptávka na akci',
            subtitle: 'Trička, sudy, výčepní zařízení na akce \u2014 napište nám, co potřebujete.',
            direct: {
                title: 'Přímé objednávky',
                description: 'Napište nám ohledně objednávek, akcí a aktuální dostupnosti.',
                feature1: 'Vítáme individuální poptávky',
                feature2: 'Dostupnost potvrdíme na dotaz',
                feature3: 'Speciální balení na akce',
                btn: 'Kontaktujte nás'
            },
            nearby: {
                title: 'Partnerská místa',
                description: 'Jebrewsalem najdete u našich partnerů.',
                feature1: '5 partnerských míst',
                feature2: 'Dostupnost se může lišit podle místa',
                btn: 'Informace o prodejně'
            },
            typeLabel: 'Co si chcete objednat?',
            type: {
                tshirt: 'Tričko',
                keg: 'Sud piva 30 l',
                tap: 'Pivo s výčepním zařízením'
            },
            fields: {
                name: 'Jméno *',
                email: 'Email *',
                phone: 'Telefon *',
                comment: 'Poznámka',
                consent: 'Souhlasím se zpracováním svých osobních údajů za účelem vyřízení této poptávky.',
                consentLink: 'Viz Zásady ochrany osobních údajů',
                ageConfirm: 'Potvrzuji, že jsem starší 18 let.',
                submit: 'Odeslat poptávku',
                selectPlaceholder: '\u2014 Vyberte \u2014',
                gender: 'Střih',
                genderMale: 'Pánské',
                genderFemale: 'Dámské',
                genderUnisex: 'Unisex',
                size: 'Velikost',
                quantity: 'Počet kusů',
                beer: 'Pivo',
                volume: 'Objem',
                kegsQty: 'Počet sudů',
                delivery: 'Odběr / doručení',
                deliveryPickup: 'Osobní odběr',
                deliveryPrague: 'Doručení po Praze',
                deliveryDiscuss: 'Domluvit individuálně',
                date: 'Preferovaný termín',
                eventDate: 'Datum akce',
                eventLocation: 'Místo akce',
                people: 'Přibližný počet lidí',
                kegsNeeded: 'Kolik 30l sudů potřebujete?',
                setupNeeded: 'Potřebujete doručení / instalaci?',
                setupYes: 'Ano',
                setupNo: 'Ne',
                setupUnsure: 'Nejsem si jistý/á'
            },
            errors: {
                required: 'Toto pole je povinné.',
                email: 'Zadejte prosím platnou emailovou adresu.',
                number: 'Zadejte prosím kladné číslo.',
                date: 'Použijte prosím formát DD.MM.RRRR.',
                type: 'Vyberte prosím typ poptávky.'
            },
            success: 'Vaše poptávka byla odeslána! Brzy se vám ozveme.',
            error: 'Vyplňte prosím všechna povinná pole správně.'
        },
        
        // Merchandise Section
        merch: {
            title: 'Zboží',
            subtitle: 'Produkty Jebrewsalem',
            tshirt: {
                label: 'Tričko',
                name: 'Tričko Jebrewsalem',
                price: '599 Kč'
            },
            glass: {
                label: 'Pivní sklenice',
                name: 'Pivní sklenice Jebrewsalem',
                price: '150 Kč'
            },
            bag: {
                label: 'Nákupní taška',
                name: 'Nákupní taška Jebrewsalem',
                price: '150 Kč'
            },
            ask: 'Zeptat se na produkt'
        },
        
        // Gallery Section
        gallery: {
            title: 'Galerie',
            subtitle: 'Vizuální cesta naším řemeslem'
        },
        
        // Contacts Section
        contacts: {
            title: 'Kontakt',
            subtitle: 'Kontaktujte Jebrewsalem s.r.o.',
            company: 'Společnost',
            reach: 'Kontakt',
            email: 'Email:',
            phone: 'Telefon:',
            emailPurposes: 'Obecné dotazy, velkoobchod, akce a tisk.',
            shopName: 'Beer Golem',
            shopOfficial: 'Oficiální kamenná prodejna značky Jebrewsalem',
            shopAddressNote: 'Adresa prodejny; nejde o adresu výroby piva.',
            shopAddress: 'Pohořelec 153/2, Praha 1, Česká republika',
            shopHours: 'Neděle–pátek, 12:00–19:00. V sobotu zavřeno.',
            shopLink: 'Navštívit prodejnu',
            mapsLink: 'Otevřít v Google Maps'
        },
        
        // Footer
        footer: {
            tagline: 'Řemeslné pivo s duší',
            copyright: '© 2026 JEBREWSALEM. Všechna práva vyhrazena.',
            disclaimer: 'Pijte odpovědně. Musíte být starší 18 let.'
        },

        // Keg Rental page
        kegRental: {
            title: 'Pronájem pivního sudu Praha | JEBREWSALEM',
            metaDesc: 'Pronájem 30l sudu piva Jebrewsalem APA 12° v Praze. Osobní odběr nebo doručení po dohodě.',
            h1: 'Pronájem pivního sudu Praha',
            intro: 'Poptávejte 30l sud piva Jebrewsalem APA 12° na párty, oslavu nebo firemní akci v Praze.',
            whatTitle: 'Co dostanete',
            whatDesc: '30l sud piva Jebrewsalem APA 12° \u2014 American Pale Ale (5\u202f% alkoholu, 22\u202fIBU). Na výběr: pouze sud, nebo sud\u202f+\u202fvýčepní zařízení.',
            beerSpecs: 'Jebrewsalem APA 12° \u2014 APA, 5\u202f% alkoholu, 22\u202fIBU',
            volume: 'Objem sudu: 30\u202fl',
            formats: 'K dispozici samotný sud nebo sud\u202f+\u202fvýčepní zařízení',
            detailsTitle: 'Detaily pronájmu',
            deposit: 'Záloha za sud',
            depositValue: '1\u202f000\u202fKč (vratná)',
            leadTime: 'Dodací lhůta',
            leadTimeValue: 'Již od 12 hodin',
            minOrder: 'Minimální objednávka',
            minOrderValue: 'Žádná',
            area: 'Oblast doručení',
            areaValue: 'Pouze Praha',
            delivery: 'Předání',
            deliveryValue: 'Osobní odběr nebo doručení po Praze',
            ctaTitle: 'Chcete si objednat?',
            ctaDesc: 'Vyplňte poptávkový formulář na úvodní stránce a vyberte \u201eSud piva 30\u202fl\u201c.',
            ctaBtn: 'Přejít na formulář',
            contactTitle: 'Máte dotazy?',
            contactDesc: 'Kontaktujte nás e-mailem nebo telefonicky.'
        },

        // Tap Rental page
        tapRental: {
            title: 'Pronájem výčepu Praha | JEBREWSALEM',
            metaDesc: 'Pronájem pivního výčepu na soukromé a firemní akce a oslavy v Praze.',
            h1: 'Pronájem výčepu na akce Praha',
            intro: 'Výčepní zařízení s pivem Jebrewsalem APA 12° na soukromé a firemní akce a oslavy v Praze.',
            whatTitle: 'Co je součástí služby',
            whatDesc: 'Kompletní řešení čepovaného piva: 30l sud(y) Jebrewsalem APA 12° + výčepní zařízení.',
            beerSpecs: 'Jebrewsalem APA 12° \u2014 APA, 5\u202f% alkoholu, 22\u202fIBU',
            volume: 'Objem sudu: 30\u202fl',
            equipment: 'Výčepní zařízení je součástí balíčku',
            detailsTitle: 'Detaily služby',
            deposit: 'Záloha za výčepní zařízení',
            depositValue: '10\u202f000\u202fKč (vratná)',
            leadTime: 'Dodací lhůta',
            leadTimeValue: 'Již od 12 hodin',
            minOrder: 'Minimální objednávka',
            minOrderValue: 'Žádná',
            area: 'Oblast služby',
            areaValue: 'Pouze Praha',
            events: 'Vhodné pro',
            eventsValue: 'Soukromé párty, firemní akce, oslavy',
            ctaTitle: 'Chcete zarezervovat?',
            ctaDesc: 'Vyplňte poptávkový formulář na úvodní stránce a vyberte \u201ePivo s výčepním zařízením\u201c.',
            ctaBtn: 'Přejít na formulář',
            contactTitle: 'Máte dotazy?',
            contactDesc: 'Kontaktujte nás e-mailem nebo telefonicky.'
        },

        // Souhlas s cookies
        consent: {
            ariaLabel: 'Nastavení cookies',
            title: 'Nastavení cookies',
            text: 'Používáme nezbytné úložiště pro zapamatování volby jazyka. S vaším souhlasem používáme také volitelné analytické cookies, abychom lépe porozuměli návštěvnosti webu a mohli ho zlepšovat.',
            policyLink: 'Zásady ochrany osobních údajů',
            reject: 'Odmítnout volitelné cookies',
            accept: 'Přijmout volitelné cookies'
        }
    }
};
