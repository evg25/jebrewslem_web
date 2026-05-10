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
            contacts: 'Contacts'
        },
        
        // Hero Section
        hero: {
            headline: 'Where Jerusalem Meets Prague',
            manifesto1: 'Born from the ancient stones of Jerusalem and the brewing tradition of Prague, JEBREWSALEM is more than beer—it\'s a cultural bridge. Each brew tells a story of two cities, two traditions, one soul.',
            manifesto2: 'Crafted with passion, served with history.',
            btnBeers: 'Explore Our Beers',
            btnOrder: 'Order Now'
        },
        
        // Beer Section
        beer: {
            title: 'Our Craft',
            subtitle: 'Every bottle is a journey between two ancient cities',
            untappdLabel: 'View on Untappd',
            brevnovAle: {
                name: 'Brevnov Ale - 2024',
                style: 'APA',
                description: 'Brewed in the shadow of Prague\'s oldest monastery. Bright, hoppy, and balanced — our first craft ale.'
            }
        },
        
        // Orders / Request Form Section
        orders: {
            title: 'Order & Event Request',
            subtitle: 'T-shirts, kegs, and event tap setups — tell us what you need.',
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
                consent: 'I acknowledge that my personal data will be processed for the purpose of handling my request.',
                consentLink: '(Privacy policy)',
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
            subtitle: 'Wear the spirit of two cities',
            tshirt: {
                name: 'JEBREWSALEM Classic Tee',
                price: '$29.99',
                description: 'Premium cotton t-shirt featuring our iconic logo. Comfortable, stylish, and perfect for beer lovers.',
                sizes: 'Sizes:',
                sizesValue: 'S, M, L, XL, XXL',
                material: 'Material:',
                materialValue: '100% Cotton',
                colors: 'Colors:',
                colorsValue: 'Black, White, Sand',
                btn: 'Order Now'
            }
        },
        
        // Gallery Section
        gallery: {
            title: 'Gallery',
            subtitle: 'A visual journey through our craft'
        },
        
        // Contacts Section
        contacts: {
            title: 'Get in Touch',
            subtitle: 'Questions, collaborations, or just want to say hi?',
            visit: 'Visit Us',
            brewery: 'JEBREWSALEM Brewery',
            location: 'Old Town Quarter',
            city: 'Prague / Jerusalem',
            hours: 'Opening Hours: Mon-Sat, 10:00-22:00',
            reach: 'Reach Out',
            email: 'Email:',
            phone: 'Phone:',
            press: 'Press:',
            follow: 'Follow Our Journey'
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
            metaDesc: 'Rent a 30\u202fL craft beer keg in Prague. Brevnov Ale delivered or picked up. No minimum order, 12\u202fh lead time. 1\u2009000\u202fCZK deposit.',
            h1: 'Beer Keg Rental Prague',
            intro: 'Order a 30\u202fL keg of our Brevnov Ale craft beer for your event, party, or personal enjoyment. We operate in Prague only.',
            whatTitle: 'What you get',
            whatDesc: 'A full 30\u202fL keg of Brevnov Ale \u2014 our Prague-brewed American Pale Ale (5\u202f% ABV, 22\u202fIBU). Available keg-only or keg\u202f+\u202ftap equipment.',
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
            contactDesc: 'Contact us by email or WhatsApp.'
        },

        // Tap Rental page
        tapRental: {
            title: 'Beer Tap Rental Prague | JEBREWSALEM',
            metaDesc: 'Beer tap equipment rental for events in Prague. Keg + tap setup, private parties and corporate events. 10\u202f000\u202fCZK deposit, 12\u202fh lead time.',
            h1: 'Beer Tap Rental Prague',
            intro: 'Full beer tap setup with our Brevnov Ale craft beer for your event. Private parties, corporate events, and celebrations in Prague.',
            whatTitle: 'What is included',
            whatDesc: 'A complete beer on tap solution: 30\u202fL keg(s) of Brevnov Ale plus tap equipment. Ideal for events where guests appreciate fresh draft beer.',
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
            contactDesc: 'Contact us by email or WhatsApp.'
        },

        // Cookie consent banner
        consent: {
            ariaLabel: 'Cookie preferences',
            title: 'Cookie preferences',
            text: 'We use essential storage to remember your language choice. With your consent, we also use analytics cookies to understand how visitors use our website and improve it.',
            policyLink: 'Privacy Policy',
            reject: 'Reject optional cookies',
            accept: 'Accept cookies'
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
            contacts: 'Kontakty'
        },
        
        // Hero Section
        hero: {
            headline: 'Kde se setkává Jeruzalém s Prahou',
            manifesto1: 'Zrozený z prastarých kamenů Jeruzaléma a pivovarnické tradice Prahy, JEBREWSALEM je více než pivo—je to kulturní most. Každý várka vypráví příběh dvou měst, dvou tradic, jedné duše.',
            manifesto2: 'Vařeno s vášní, podáváno s historií.',
            btnBeers: 'Prozkoumejte naše piva',
            btnOrder: 'Objednat nyní'
        },
        
        // Beer Section
        beer: {
            title: 'Naše řemeslo',
            subtitle: 'Každá láhev je cesta mezi dvěma prastarými městy',
            untappdLabel: 'Zobrazit na Untappd',
            brevnovAle: {
                name: 'Brevnov Ale - 2024',
                style: 'APA',
                description: 'Uvařeno ve stínu nejstaršího pražského kláštera. Svěží, chmelové a vyvážené — naše první craft ale.'
            }
        },
        
        // Orders / Request Form Section
        orders: {
            title: 'Objednávka / poptávka na akci',
            subtitle: 'Trička, sudy, výčepní zařízení na akce \u2014 napište nám, co potřebujete.',
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
                consent: 'Beru na vědomí zpracování osobních údajů za účelem vyřízení mé poptávky.',
                consentLink: '(Zásady ochrany osobních údajů)',
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
            subtitle: 'Noste ducha dvou měst',
            tshirt: {
                name: 'JEBREWSALEM Klasické tričko',
                price: '$29.99',
                description: 'prémiové bavlněné tričko s naším ikonickým logem. Pohodlné, stylové a perfektní pro milovníky piva.',
                sizes: 'Velikosti:',
                sizesValue: 'S, M, L, XL, XXL',
                material: 'Materiál:',
                materialValue: '100% bavlna',
                colors: 'Barvy:',
                colorsValue: 'Černá, Bílá, Písková',
                btn: 'Objednat nyní'
            }
        },
        
        // Gallery Section
        gallery: {
            title: 'Galerie',
            subtitle: 'Vizuální cesta naším řemeslem'
        },
        
        // Contacts Section
        contacts: {
            title: 'Kontaktujte nás',
            subtitle: 'Otázky, spolupráce nebo jen chcete pozdravit?',
            visit: 'Navštivte nás',
            brewery: 'Pivovar JEBREWSALEM',
            location: 'Čtvrť Starého Města',
            city: 'Praha / Jeruzalém',
            hours: 'Otevírací doba: Po-So, 10:00-22:00',
            reach: 'Kontaktovat',
            email: 'Email:',
            phone: 'Telefon:',
            press: 'Tisk:',
            follow: 'Sledujte naši cestu'
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
            metaDesc: 'Pronájem 30l pivního sudu v Praze. Craft pivo Brevnov Ale \u2014 osobní odběr nebo doručení. Bez minimální objednávky, do 12 hodin. Záloha 1\u202f000\u202fKč.',
            h1: 'Pronájem pivního sudu Praha',
            intro: 'Půjčte si 30l sud našeho craft piva Brevnov Ale na párty, oslavu nebo firemní akci. Provozujeme pouze na území Prahy.',
            whatTitle: 'Co dostanete',
            whatDesc: 'Plný 30l sud piva Brevnov Ale \u2014 Prague-brewed American Pale Ale (5\u202f% alc., 22\u202fIBU). Na výběr: pouze sud, nebo sud\u202f+\u202fvýčepní zařízení.',
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
            contactDesc: 'Kontaktujte nás e-mailem nebo přes WhatsApp.'
        },

        // Tap Rental page
        tapRental: {
            title: 'Pronájem výčepu Praha | JEBREWSALEM',
            metaDesc: 'Pronájem pivního výčepu na akce v Praze. Keg + výčepní zařízení, soukromé a firemní akce. Záloha 10\u202f000\u202fKč, dodání do 12 hodin.',
            h1: 'Pronájem výčepu na akce Praha',
            intro: 'Kompletní výčepní servis s naším craft pivem Brevnov Ale. Soukromé párty, firemní akce a oslavy na území Prahy.',
            whatTitle: 'Co je součástí služby',
            whatDesc: 'Kompletní řešení čepovaného piva: 30l sud(y) Brevnov Ale + výčepní zařízení. Ideální pro akce, kde si hosté chtějí vychutnat čerstvé pivo přímo z pipy.',
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
            contactDesc: 'Kontaktujte nás e-mailem nebo přes WhatsApp.'
        },

        // Souhlas s cookies
        consent: {
            ariaLabel: 'Nastavení cookies',
            title: 'Nastavení cookies',
            text: 'Používáme nezbytné úložiště pro zapamatování volby jazyka. S vaším souhlasem používáme také analytické cookies, abychom lépe porozuměli návštěvnosti webu a mohli ho zlepšovat.',
            policyLink: 'Zásady ochrany osobních údajů',
            reject: 'Odmítnout volitelné cookies',
            accept: 'Přijmout cookies'
        }
    }
};

