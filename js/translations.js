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
                consent: 'I agree to be contacted regarding this request.',
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
            disclaimer: 'Drink responsibly. You must be 21+ to consume alcohol.'
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
        
        // Orders Section
        orders: {
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
                consent: 'Souhlasím s tím, aby mě společnost kontaktovala ohledně této poptávky.',
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
            disclaimer: 'Pijte odpovědně. Musíte mít 21+.'
        }
    }
};

