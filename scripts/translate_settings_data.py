#!/usr/bin/env python3
"""Translate Dutch strings in config/settings_data.json to English."""
from pathlib import Path

PATH = Path(__file__).resolve().parent.parent / "config" / "settings_data.json"

# Longest-first exact replacements
SUBS = [
    # Marquee / repeating banners
    (
        "BALLEN BALLEN ACCESSOIRES KRIJG DE MEEST UITZONDERLIJKE ACCESSOIRES DIE BIJ UW BAL PASSEN ACCESSOIRES ACCESSOIRES",
        "BALLS BALLS ACCESSORIES GET THE MOST EXCEPTIONAL ACCESSORIES THAT MATCH YOUR BALL ACCESSORIES ACCESSORIES",
    ),
    (
        "BALLEN BALLEN DE MEEST UNIEKE BALLEN VAN DE MARKT BALLEN BALLEN DE MEEST UNIEKE BALLEN VAN DE MARKT BALLEN BALLEN DE MEEST UNIEKE BALLEN VAN DE MARKT BALLEN BALLEN DE MEEST UNIEKE BALLEN VAN DE MARKT BALLEN BALLEN DE MEEST UNIEKE BALLEN VAN DE MARKT BALLEN BALLEN",
        "BALLS BALLS THE MOST UNIQUE BALLS ON THE MARKET BALLS BALLS THE MOST UNIQUE BALLS ON THE MARKET BALLS BALLS THE MOST UNIQUE BALLS ON THE MARKET BALLS BALLS THE MOST UNIQUE BALLS ON THE MARKET BALLS BALLS THE MOST UNIQUE BALLS ON THE MARKET BALLS BALLS",
    ),
    ("BUNDELS BUNDELS ", "BUNDLES BUNDLES "),
    # Long HTML / FAQ answers
    (
        "<p>Het team van BRIGHT doet zijn uiterste best om de hoogst mogelijke kwaliteit te leveren en de beste ervaring te creëren voor jou. Ons doel is dan ook om deze nieuwe innoverende bal een plek in de markt te geven.  We willen dat jij hier deel uit van kan maken zonder enig risico, daarom bieden wij een 30-dagen geld terug garantie!</p>",
        "<p>The BRIGHT team does its utmost to deliver the highest possible quality and create the best experience for you. Our goal is to give this innovative ball a place in the market. We want you to be part of it without any risk—that is why we offer a 30-day money-back guarantee!</p>",
    ),
    (
        "<p>Onze viral BRIGHT® bal gebruikt lichtgevende technologie, waarmee deze licht gaat geven zodra die in contact komt met licht. Denk daarbij aan het licht van de camera op je mobiele telefoon. Zodra je dus een foto of video maakt, lijkt het alsof de bal licht geeft op je scherm. Het is een super gaaf effect die zeker ieders aandacht gaat opeisen! </p>",
        "<p>Our viral BRIGHT® ball uses glow technology—it lights up when it catches light. Think of your phone camera flash. When you take a photo or video, the ball appears to glow on your screen. It is a stunning effect that grabs everyone's attention!</p>",
    ),
    (
        "<p>Met de BRIGHT bal beleef je oneindig veel spelplezier, aangezien deze zowel indoor als outdoor gebruikt kan worden!</p><p>Het maakt daarom niet uit of je op het veld staat of thuis bezig bent, de BRIGHT bal past zich aan elke situatie aan. </p>",
        "<p>With the BRIGHT ball you get endless fun—it works both indoors and outdoors!</p><p>Whether you are on the pitch or playing at home, the BRIGHT ball adapts to every situation.</p>",
    ),
    (
        "<p>Het behouden van het lichtgevende effect is efen fluitje van een cent! Veeg deze simpelweg af met een natte doek, waarbij je sterke schoonmaakmiddelen of het onderdompelen in water moet vermijden. </p>",
        "<p>Keeping the glow effect is easy! Simply wipe with a damp cloth—avoid harsh cleaners or submerging in water.</p>",
    ),
    (
        "<p>We zijn ervan overtuigd dat het product in de smaak valt! Is dat niet het geval, dan bieden we een 30-dagen geld terug garantie. Ben je niet 100% tevreden over je aankoop vanwege welke reden dan ook, stuur het simpelweg terug om je geld of een ander product te krijgen. </p>",
        "<p>We are confident you will love the product! If not, we offer a 30-day money-back guarantee. If you are not 100% satisfied for any reason, simply return it for a refund or exchange.</p>",
    ),
    (
        "<p>Geniet van de BRIGHT® bal waar je ook bent! Onze wereldwijde verzending zorgt ervoor dat dit sensationele product je kan bereiken, waar je ook woont. Denk aan de verzendkosten en de levertijden, die kunnen variëren afhankelijk van je locatie. </p>",
        "<p>Enjoy the BRIGHT® ball wherever you are! Our worldwide shipping brings this product to you wherever you live. Shipping costs and delivery times may vary by location.</p>",
    ),
    (
        "<p>Geniet overal van de BRIGHT® ballen! Onze wereldwijde verzending zorgt ervoor dat dit sensationele product jou kan bereiken, waar je ook woont. Houd rekening met de verzend- en levertijden, die kunnen variëren afhankelijk van jouw locatie.</p>",
        "<p>Enjoy BRIGHT® balls everywhere! Our worldwide shipping gets this product to you wherever you live. Please note shipping and delivery times may vary by location.</p>",
    ),
    (
        "<p>We zijn ervan overtuigd dat het product naar wens zal zijn! Zo niet, bieden we een geld-terug-garantie van 30 dagen. Als je om welke reden dan ook niet 100% tevreden bent met je aankoop, neem dan contact op met ons vriendelijke klantenserviceteam via <a href=\"mailto:support@brightsport.com\" title=\"mailto:support@brightsport.com\"><strong>support@brightsport.com</strong></a><strong> </strong></p>",
        "<p>We are confident you will love the product! If not, we offer a 30-day money-back guarantee. If you are not 100% satisfied for any reason, contact our friendly customer service team at <a href=\"mailto:support@brightsport.com\" title=\"mailto:support@brightsport.com\"><strong>support@brightsport.com</strong></a><strong> </strong></p>",
    ),
    (
        "<p>Ja! We kunnen onze ballen personaliseren volgens jouw merk, maar het BRIGHT-logo en de naam zullen er nog steeds op staan. Een minimale bestelhoeveelheid is hiervoor vereist. Vul dit <a href=\"/pages/contact-us\" title=\"Dev Contact Us\"><strong>contactformulier</strong></a> in om prijzen aan te vragen.</p>\n<div class=\"klaviyo-form-TpSUVF\"></div>",
        "<p>Yes! We can personalize our balls with your branding, but the BRIGHT logo and name will remain visible. A minimum order quantity is required. Fill out this <a href=\"/pages/contact-us\" title=\"Dev Contact Us\"><strong>contact form</strong></a> to request pricing.</p>\n<div class=\"klaviyo-form-TpSUVF\"></div>",
    ),
    (
        "<p>Ja! We kunnen onze ballen personaliseren volgens jouw branding, maar het BRIGHT-logo en de naam blijven zichtbaar. Hiervoor is een minimale bestelhoeveelheid vereist. Vul dit <a href=\"/pages/dev-contact-us\" title=\"Dev Contact Us\"><strong>contactformulier</strong></a> in om informatie over prijzen op te vragen.</p>",
        "<p>Yes! We can personalize our balls with your branding, but the BRIGHT logo and name remain visible. A minimum order quantity is required. Fill out this <a href=\"/pages/dev-contact-us\" title=\"Dev Contact Us\"><strong>contact form</strong></a> to request pricing.</p>",
    ),
    (
        "<p>BRIGHT doet haar uiterste best om de meest innovatieve bal op de markt te brengen en we willen ervoor zorgen dat jij daar zonder enig risico deel van uit kunt maken. Hier is hoe:</p>",
        "<p>BRIGHT works hard to bring the most innovative ball to market, and we want you to be part of it without any risk. Here is how:</p>",
    ),
    (
        "<p>BRIGHT doet haar uiterste best om de meest innovatieve bal op de markt te brengen en wij willen ervoor zorgen dat jij daar zonder enig risico deel van kunt uitmaken. Dit is hoe:</p>",
        "<p>BRIGHT works hard to bring the most innovative ball to market, and we want you to be part of it without any risk. Here is how:</p>",
    ),
    (
        "<p>We bieden 24/7 ticket- en e-mailondersteuning, neem gerust contact op met support@brightsport.com. We staan klaar om je te helpen :)</p>",
        "<p>We offer 24/7 ticket and email support—contact support@brightsport.com anytime. We are here to help :)</p>",
    ),
    (
        "<p>BRIGHT heeft het klassieke voetbalspel een geheel nieuwe draai gegeven door een bal te maken van een <em>holografische stof</em> die zeer reflecterend is om te flitsen. Met de BRIGHT bal blijf je spelen, lang nadat de sterren zijn verschenen. <br/><br/>Met een focus op kwaliteit en innovatie is BRIGHT toonaangevend op het gebied van sportproducten. Speel vandaag nog <em>en verlicht</em> de nacht met BRIGHT.</p><p><strong>Waar wacht je nog op? </strong></p>",
        "<p>BRIGHT has reinvented classic football with a ball made from <em>holographic fabric</em> that catches and reflects light. With the BRIGHT ball, keep playing long after the stars come out.<br/><br/>Focused on quality and innovation, BRIGHT leads in sports products. Play today and <em>light up</em> the night with BRIGHT.</p><p><strong>What are you waiting for?</strong></p>",
    ),
    (
        "<p><strong>Niet alleen een spel, het is een ervaring</strong></p><ul><li>Het cadeau dat elke jonge speler wenst</li><li>Momenten die hun ogen doen oplichten </li></ul>",
        "<p><strong>Not just a game—it is an experience</strong></p><ul><li>The gift every young player wants</li><li>Moments that make their eyes light up</li></ul>",
    ),
    (
        "<p>Het is gemaakt van een holografisch materiaal dat licht vangt en weerkaatst. Wanneer je een foto maakt of een video opneemt met de flits ingeschakeld, geeft de bal een lichtgevend effect, waardoor het lijkt alsof hij gloeit op het scherm van je apparaat. Dit verbluffende effect is zelfs zichtbaar in daglicht!</p>",
        "<p>It is made from holographic material that catches and reflects light. When you take a photo or video with flash on, the ball creates a glow effect on your screen. This stunning effect is even visible in daylight!</p>",
    ),
    (
        "We raden aan je bril voorzichtig af te vegen met een zachte, schone doek. Vermijd het gebruik van agressieve chemicaliën of zeep, omdat deze de lenzen kunnen beschadigen.",
        "We recommend gently wiping your glasses with a soft, clean cloth. Avoid harsh chemicals or soap, as they can damage the lenses.",
    ),
    (
        "Wordt automatisch toegepast bij het <span class=\"grey_bold\"><b>uitchecken.</b></span>\n<span class=\"yellow_bold\"><b>Alle ballen </b> kunnen worden gecombineerd.</span>",
        "Applied automatically at <span class=\"grey_bold\"><b>checkout.</b></span>\n<span class=\"yellow_bold\"><b>All balls </b> can be combined.</span>",
    ),
    (
        "Wordt automatisch toegepast bij het  <span class=\"grey_bold\"><b>uitchecken.</b></span>",
        "Applied automatically at <span class=\"grey_bold\"><b>checkout.</b></span>",
    ),
    (
        "De korting wordt automatisch toegepast bij het afrekenen, ballen kunnen gecombineerd worden.",
        "The discount is applied automatically at checkout; balls can be combined.",
    ),
    # Titles / headings
    ("ONTDEK DE MEEST UNIEKE VOETBAL OP DE MARKT", "DISCOVER THE MOST UNIQUE FOOTBALL ON THE MARKET"),
    ("WIJ HEBBEN DE MEEST <span>UNIEKE</span> <br>BALLEN OP DE MARKT", "WE HAVE THE MOST <span>UNIQUE</span> <br>BALLS ON THE MARKET"),
    ("WIJ HEBBEN<br>DE MEEST<br> <span>UNIEKE</span> <br>BALLEN OP DE MARKT", "WE HAVE<br>THE MOST<br> <span>UNIQUE</span> <br>BALLS ON THE MARKET"),
    ("JE hebt <span>vragen</span>.<br>\nWE HEBBEN <span>ANTWOORDEN</span>.", "YOU have <span>questions</span>.<br>\nWE HAVE <span>ANSWERS</span>."),
    ("Je hebt<span> vragen</span>. <br>\nWij hebben <span>antwoorden</span>.", "You have<span> questions</span>. <br>\nWe have <span>answers</span>."),
    ("ZOALS TE ZIEN OP TIKTOK", "AS SEEN ON TIKTOK"),
    ("VERLICHT JE", "LIGHT UP YOUR"),
    ("Gemaakt voor ", "Made for "),
    ("door atleten", "by athletes"),
    ("Klaar om je <br>\n<span>SPEL?</span>", "Ready for your <br>\n<span>GAME?</span>"),
    ("JA.  ZOVEEL <span>GELOVEN</span> WIJ IN ONS PRODUCT", "YES. WE <span>BELIEVE</span> SO MUCH IN OUR PRODUCT"),
    ("Ja, we <span>geloven</span> zoveel in ons product", "Yes, we <span>believe</span> so much in our product"),
    ("HOE HET WERKT:", "HOW IT WORKS:"),
    ("⚽ FIFA Wereldbeker SALE", "⚽ FIFA World Cup SALE"),
    ("KOOP 1,\nKRIJG 1\nGRATIS", "BUY 1,\nGET 1\nFREE"),
    ("OP ALLE BALLEN", "ON ALL BALLS"),
    # Cart / buttons
    ("VOEG TOE AAN WINKELKAR", "ADD TO CART"),
    ("TOEVOEGEN AAN WINKELWAGEN...", "ADDING TO CART..."),
    ("TOEGEVOEGD AAN WINKELWAGEN!", "ADDED TO CART!"),
    ("In winkelwagen", "Add to cart"),
    ("<span> Lage voorraad!</span> Klaar voor verzending", "<span> Low stock!</span> Ready to ship"),
    ("Lage voorraad! Klaar voor verzending", "Low stock! Ready to ship"),
    ("Betaal pas over 30 dagen met", "Pay in 30 days with"),
    ("Geld terug garantie", "Money-back guarantee"),
    ("Wat is inbegrepen", "What's included"),
    # Subtitles / promos
    ("50% KORTING OP 1 - 55% KORTING OP 2 - 60% KORTING OP 3+ | MIX EN MATCH DE BALLEN.", "50% OFF 1 - 55% OFF 2 - 60% OFF 3+ | MIX AND MATCH THE BALLS."),
    ("Gemakkelijk te gebruiken & Handig mee te nemen", "Easy to use & convenient to carry"),
    ("Versnel je beweging", "Speed up your movement"),
    ("Geef Je Stijl Glans", "Give Your Style Shine"),
    ("Laat de Nacht je Niet Stoppen", "Don't Let the Night Stop You"),
    ("Helder Schijnen, s' nachts Golfen", "Shine Bright, Golf at Night"),
    ("Laat het spel 's nachts doorgaan", "Keep the game going at night"),
    ("Ja, Giftwrap mijn bestelling", "Yes, gift-wrap my order"),
    ("Verras je dierbaren met het perfecte cadeau!", "Surprise your loved ones with the perfect gift!"),
    ("tot <span>60% korting</span>", "up to <span>60% off</span>"),
    ("🐰 Pasen", "🐰 Easter"),
    ("Maak je kit compleet", "Complete your kit"),
    ("<p>ALLEEN VANDAAG 20% KORTING MET CODE: 'BLACKFRIDAY'</p>", "<p>TODAY ONLY 20% OFF WITH CODE: 'BLACKFRIDAY'</p>"),
    ("SHOP DE LENTE SALE", "SHOP THE SPRING SALE"),
    ("BUNDEL EN BESPAAR", "BUNDLE AND SAVE"),
    ("Pas je bundel aan met elke bal!", "Customize your bundle with any ball!"),
    ("🔥 BEST VERKOPENDE", "🔥 BEST SELLING"),
    # Nav / menu
    ("over ons", "About us"),
    ("Over ons", "About us"),
    ("Producten", "Products"),
    ("Voetbal", "Football"),
    ("Basketbal", "Basketball"),
    ("Volleybal", "Volleyball"),
    ("Golfballen", "Golf balls"),
    ("Lichtgevend net", "Glow-in-the-dark net"),
    ("Helpcentrum", "Help center"),
    ("Alle producten bekijken", "View all products"),
    ("De bestsellers", "The bestsellers"),
    ("Bundels", "Bundles"),
    ("startersbundel", "starter bundle"),
    # FAQ questions
    ("Wat zijn de levertijden?", "What are the delivery times?"),
    ("Hoe werkt het?", "How does it work?"),
    ("Kan de bal zowel binnen als buiten gebruikt worden?", "Can the ball be used both indoors and outdoors?"),
    ("Kun je de bal schoonmaken?", "Can you clean the ball?"),
    ("Wat als ik mijn product niet goed vind?", "What if I don't like my product?"),
    ("Bieden jullie wereldwijde verzending aan?", "Do you offer worldwide shipping?"),
    ("Veel Gestelde Vragen", "Frequently Asked Questions"),
    ("Hoe lang duurt het om mijn bestelling te ontvangen?", "How long does it take to receive my order?"),
    ("Hoe lang duurt het voordat ik mijn bestelling ontvang?", "How long until I receive my order?"),
    ("Bieden jullie groothandelsprijzen voor bulkbestellingen?", "Do you offer wholesale prices for bulk orders?"),
    ("Wat is jullie retourbeleid?", "What is your return policy?"),
    ("Kan ik mijn product personaliseren?", "Can I personalize my product?"),
    ("Hoe gloeit de bal?", "How does the ball glow?"),
    ("Kan de bal zowel binnen als buiten worden gebruikt?", "Can the ball be used indoors and outdoors?"),
    ("Wat is het materiaal van deze ballen?", "What material are these balls made of?"),
    # FAQ answers (short)
    ("<p>Ja! Vul alstublieft dit contactformulier in om informatie over prijzen aan te vragen.</p>", "<p>Yes! Please fill out this contact form to request pricing information.</p>"),
    ("<p>Ja, het is geschikt voor zowel binnen- als buitenspelen.</p>", "<p>Yes, it is suitable for both indoor and outdoor play.</p>"),
    ("<p>Ja, je kunt het schoonmaken met een schone, vochtige doek zonder schadelijke schoonmaakmiddelen te gebruiken.</p>", "<p>Yes, you can clean it with a clean, damp cloth without harsh cleaners.</p>"),
    ("<p>Het is gemaakt van holografisch leer.</p>", "<p>It is made from holographic leather.</p>"),
    # Footer / misc
    ("<p>© Bright Sports. Alle rechten voorbehouden</p>", "<p>© Bright Sports. All rights reserved</p>"),
    ("Meld u aan voor de <span>Bright Email</span> Club voor het laatste nieuws, exclusieve kortingen & meer", "Sign up for the <span>Bright Email</span> Club for the latest news, exclusive discounts & more"),
    ("VOLG ONS OP", "FOLLOW US ON"),
    ("Verhoog je spel met de helderste bal", "Elevate your game with the brightest ball"),
    ("Shop de Bestsellers van BRIGHT", "Shop BRIGHT Bestsellers"),
    ("Shop onze producten", "Shop our products"),
    ("Leg de magie nu vast!", "Capture the magic now!"),
    ("Gewaardeerd <span> 4.9/5 </span> door meer dan 1700 klanten", "Rated <span> 4.9/5 </span> by more than 1700 customers"),
    ("1700+ Tevreden klanten", "1700+ Happy customers"),
    ("We staan achter onze producten en willen dat je helemaal tevreden bent met je aankoop. Daarom bieden we een 30 dagen geld-terug garantie op al onze producten.", "We stand behind our products and want you to be completely satisfied with your purchase. That is why we offer a 30-day money-back guarantee on all our products."),
    ("Amerikaans voetbal - Basketbal - Golfballen - Voetbal", "American football - Basketball - Golf balls - Football"),
    ("Step 2:\nWij maken er 1 cadeau van.", "Step 2:\nWe give you one for free."),
    ("Step 3:\nRond je bestelling af en maak je klaar voor de wedstrijd.", "Step 3:\nComplete your order and get ready for the match."),
    ("THE BRIGHT™ Ballspomp", "THE BRIGHT™ Ball Pump"),
    ("\"verzending\"", "\"shipping\""),
]

# Sort by length descending
SUBS.sort(key=lambda x: len(x[0]), reverse=True)


def main():
    text = PATH.read_text(encoding="utf-8")
    count = 0
    for old, new in SUBS:
        if old in text:
            n = text.count(old)
            text = text.replace(old, new)
            count += n
    PATH.write_text(text, encoding="utf-8")
    print(f"Updated {PATH.name}: {count} replacements from {len(SUBS)} patterns")


if __name__ == "__main__":
    main()
