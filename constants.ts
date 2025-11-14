import { Category, Product, QuizQuestion } from './types';

export const LOGO_URL = "https://i.ibb.co/jvCBcVtj/ideogram-v3-quality-Minimalist-modern-lo-removebg-preview.png";

export const PRODUCTS: Product[] = [
    {
        id: 'mitolyn',
        name: "🔥 Mitolyn – #1 Pick for Metabolism",
        img: "https://i.ibb.co/RpKxVDnd/Screenshot-2025-09-07-224033-removebg-preview.png",
        desc: "Designed to target the 'fat-burning engines' in your cells, making it the most effective solution for boosting metabolism and burning stubborn fat.",
        personalizedDesc: "Based on your answers, your primary focus is boosting metabolism and burning stubborn fat. Mitolyn is designed to target the 'fat-burning engines' in your cells, making it the most effective solution for your goals.",
        link: "https://b5412ik2-l3xd4pengxd6mfs4h.hop.clickbank.net/",
        category: Category.WEIGHTLOSS,
        tags: ['metabolism', 'energy', 'belly fat']
    },
    {
        id: 'sleeplean',
        name: "🌙 SleepLean – Burn Fat While You Sleep",
        img: "https://i.ibb.co/sdB26fd2/Screenshot-2025-09-07-224357-removebg-preview.png",
        desc: "Helps optimize your sleep for recovery and overnight fat-burning, perfect for tackling poor sleep and late-night cravings.",
        personalizedDesc: "Your quiz results indicate that poor sleep and late-night cravings are holding you back. SleepLean helps optimize your sleep for recovery and overnight fat-burning, making it the perfect fit for your needs.",
        link: "https://f9062mo20e29o6qonbo9m9kedc.hop.clickbank.net",
        category: Category.WEIGHTLOSS,
        tags: ['sleep', 'cravings', 'overnight']
    },
    {
        id: 'java_burn',
        name: "☕ Java Burn – Supercharge Your Coffee",
        img: "https://i.ibb.co/0j4hr60R/Screenshot-2025-09-07-224200-removebg-preview.png",
        desc: "A tasteless powder that turns your daily coffee into a powerful metabolism-booster, fitting seamlessly into your routine.",
        personalizedDesc: "You're a coffee lover looking for an extra edge! Java Burn is the ideal choice. It's a tasteless powder that turns your daily coffee into a powerful metabolism-booster, fitting seamlessly into your routine.",
        link: "https://ffa19rlf0fy4j5e7ntly7kwv2v.hop.clickbank.net/",
        category: Category.WEIGHTLOSS,
        tags: ['coffee', 'metabolism', 'routine']
    },
    {
        id: 'smoothie_diet',
        name: "🥤 The Smoothie Diet – A 21-Day Plan",
        img: "https://i.ibb.co/GQkcVyyP/Chat-GPT-Image-Sep-7-2025-10-58-02-PM-removebg-preview.png",
        desc: "Provides a simple, delicious, and effective 21-day program to kickstart your weight loss journey.",
        personalizedDesc: "You're looking for a structured, easy-to-follow plan for quick results. The Smoothie Diet is our top recommendation for you. It provides a simple, delicious, and effective 21-day program to kickstart your weight loss journey.",
        link: "https://a7b22hohugs2r9qi19wis-xa4e.hop.clickbank.net",
        category: Category.WEIGHTLOSS,
        tags: ['plan', 'fast results', 'diet']
    },
    {
        id: 'hydrossential',
        name: "💧 Hydrossential – Natural Skin Serum",
        img: "https://i.ibb.co/tPz7ZkkN/Screenshot-2025-09-07-230034-removebg-preview.png",
        desc: "A natural, plant-based serum designed to support flawless, wrinkle-free skin, helping you maintain a healthy and glowing complexion.",
        personalizedDesc: "Your answers highlight a desire for healthier, more radiant skin. Hydrossential is a natural serum designed to rejuvenate and hydrate your skin, directly addressing your goals for a glowing complexion.",
        link: "https://513b2oecyc2vicm6a75bujmh0v.hop.clickbank.net",
        category: Category.SKIN_NAILS,
        tags: ['skin care', 'serum', 'radiance']
    },
    {
        id: 'pro_nail_complex',
        name: "💅 ProNail Complex – Nail & Foot Care",
        img: "https://i.ibb.co/kg8q3hvg/Screenshot-2025-11-13-092130-Photoroom.png",
        desc: "A powerful, doctor-formulated mist spray that supports healthy nails and feet by targeting fungus at its source.",
        personalizedDesc: "You've indicated a focus on nail health. ProNail Complex targets the root cause of nail issues with a powerful blend of oils and vitamins, giving you the healthy, beautiful nails you deserve.",
        link: "https://pronailcomplex24.com/text.php#aff=uditprabha",
        category: Category.SKIN_NAILS,
        tags: ['nails', 'fungus', 'strength']
    },
    {
        id: 'prostavive',
        name: "❤️ ProstaVive – Support His Health",
        img: "https://i.ibb.co/0jMVJykK/Screenshot-2025-11-13-081404-Photoroom.png",
        desc: "A natural supplement designed to support prostate health, a key factor in his well-being and confidence.",
        personalizedDesc: "You want to support your partner's health. ProstaVive is a natural supplement for prostate health, which is a key factor in his overall well-being and can contribute positively to your relationship.",
        link: "https://d20barpayb5wc4ib5f-ea5ek96.hop.clickbank.net",
        category: Category.RELATIONSHIP,
        tags: ["men's health", 'prostate', 'wellness']
    },
    {
        id: 'his_secret_obsession',
        name: "💘 His Secret Obsession – Deepen Your Bond",
        img: "https://i.ibb.co/1JTYSnpN/Screenshot-2025-11-13-085251-Photoroom.png",
        desc: "Unlock the secrets to a man's heart and understand what makes him commit for life.",
        personalizedDesc: "You're looking to deepen your connection. This guide helps you understand the 'Hero Instinct,' a key psychological trigger that can transform your relationship and make you his deepest passion.",
        link: "https://8bacekt7xe58h7b6jrz4spmm7y.hop.clickbank.net",
        category: Category.RELATIONSHIP,
        tags: ['love', 'psychology', 'dating']
    },
    {
        id: 'the_ex_factor',
        name: "💔 The Ex Factor 2.0 – Mend a Breakup",
        img: "https://i.ibb.co/zDx1jjT/EFG-Female-Full-Tableau-1-Photoroom.png",
        desc: "A step-by-step guide on how to win back your ex using proven psychological techniques.",
        personalizedDesc: "You're navigating a difficult breakup. The Ex Factor provides a step-by-step guide on how to win back your ex, using proven techniques to help you re-establish connection and rebuild a stronger relationship.",
        link: "https://06a7fkgg0at8g8l7ua3d8gjcoe.hop.clickbank.net",
        category: Category.RELATIONSHIP,
        tags: ['breakup', 'reconciliation', 'relationships']
    }
];

const TOTAL_STEPS = 6;

export const QUIZ_QUESTIONS: QuizQuestion[] = [
    // --- STEP 1: Entry Point ---
    {
        id: 0,
        question: "Welcome! To find your perfect match, what area of life is your main focus right now?",
        step: 1, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "My physical health & energy", nextQuestion: 1 },
            { text: "My outer radiance & glow", nextQuestion: 2 },
            { text: "My relationships & connections", nextQuestion: 3 },
        ]
    },

    // --- HEALTH PATH - STEP 2 ---
    {
        id: 1,
        question: "Great! Let's focus on your health. What's the number one goal for you?",
        step: 2, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "To lose weight, especially stubborn fat.", nextQuestion: 10 },
            { text: "To improve my sleep and control cravings.", nextQuestion: 11 },
            { text: "To find an easy, consistent routine.", nextQuestion: 12 },
        ]
    },

    // --- HEALTH PATH - STEP 3 ---
    {
        id: 10,
        question: "Losing stubborn fat can be tough. What's your biggest hurdle?",
        step: 3, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "A sluggish metabolism and low energy.", nextQuestion: 100 },
            { text: "Finding time to cook healthy meals.", nextQuestion: 101 },
        ]
    },
    {
        id: 11,
        question: "Improving sleep is a game-changer. Which statement resonates more?",
        step: 3, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "I toss and turn, and wake up feeling exhausted.", nextQuestion: 110 },
            { text: "My biggest downfall is late-night snacking.", nextQuestion: 110 },
        ]
    },
    {
        id: 12,
        question: "Consistency is key! What does your morning typically look like?",
        step: 3, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "It's a rush, but I always make time for coffee.", nextQuestion: 120 },
            { text: "I prefer a structured meal or drink to start my day.", nextQuestion: 121 },
        ]
    },

    // --- HEALTH PATH - STEP 4 ---
    {
        id: 100,
        question: "Let's talk about that energy. When do you feel the biggest slump?",
        step: 4, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "The afternoon crash is my enemy.", nextQuestion: 1000 },
            { text: "I feel tired from the moment I wake up.", nextQuestion: 110 },
        ]
    },
    {
        id: 101,
        question: "When you're short on time, what's a more appealing solution?",
        step: 4, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "A quick, all-in-one meal replacement, like a smoothie.", nextQuestion: 1010 },
            { text: "A simple supplement that works in the background.", nextQuestion: 1000 },
        ]
    },
    {
        id: 110,
        question: "It sounds like your nights are disrupting your goals. What's your biggest frustration?",
        step: 4, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "That I'm undoing my hard work from the day.", nextQuestion: 1100 },
            { text: "That I lack the energy to even try the next day.", nextQuestion: 1100 },
        ]
    },
    {
        id: 120,
        question: "A coffee ritual is a great foundation. How do you feel about enhancing it?",
        step: 4, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "I'm open to it, if it's tasteless and easy!", nextQuestion: 1200 },
            { text: "I'd rather keep my coffee separate and add a supplement.", nextQuestion: 1000 },
        ]
    },
    {
        id: 121,
        question: "A structured start is smart. What appeals more?",
        step: 4, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "A delicious, easy-to-make smoothie plan.", nextQuestion: 1210 },
            { text: "A simple pill or supplement alongside my normal breakfast.", nextQuestion: 1000 },
        ]
    },

    // --- HEALTH PATH - STEP 5 (FINAL) ---
    {
        id: 1000,
        question: "We need something to fire up your internal engine. How do you feel about adding a simple supplement to your morning?",
        step: 5, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "Sounds perfect, I need something that works all day.", productId: 'mitolyn' },
            { text: "I'd prefer something that also helps with meal structure.", productId: 'smoothie_diet' },
        ]
    },
    {
        id: 1010,
        question: "The Smoothie Diet is a 21-day plan for rapid results. Does a fixed-term, high-impact plan sound exciting?",
        step: 5, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "Yes! I'm ready for a kickstart.", productId: 'smoothie_diet' },
            { text: "I'm looking for a more long-term, daily solution.", productId: 'mitolyn' },
        ]
    },
    {
        id: 1100,
        question: "Let's turn your sleep into a secret weapon. Are you ready for a solution that helps you burn fat while you rest?",
        step: 5, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "Absolutely. That sounds like a dream.", productId: 'sleeplean' },
            { text: "That sounds great, sign me up!", productId: 'sleeplean' },
        ]
    },
    {
        id: 1200,
        question: "Java Burn dissolves instantly in your coffee to boost metabolism. Does this sound like the seamless fit you're looking for?",
        step: 5, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "Yes, that's exactly what I need!", productId: 'java_burn' },
            { text: "Perfect! I don't want to change my routine.", productId: 'java_burn' },
        ]
    },
    {
        id: 1210,
        question: "The Smoothie Diet is designed for busy people who want a clear, effective plan. Does this match what you're looking for?",
        step: 5, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "Yes, a step-by-step guide is perfect.", productId: 'smoothie_diet' },
            { text: "It sounds good, let's do it!", productId: 'smoothie_diet' },
        ]
    },

    // --- SKIN/NAILS PATH - STEP 2 ---
    {
        id: 2,
        question: "Beautiful! Where do you want to focus your radiance?",
        step: 2, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "On achieving clear, hydrated, and youthful skin.", nextQuestion: 20 },
            { text: "On strengthening my nails and caring for my feet.", nextQuestion: 21 },
        ]
    },

    // --- SKIN/NAILS PATH - STEP 3 ---
    {
        id: 20,
        question: "What's your number one skin concern right now?",
        step: 3, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "Dryness and a lack of a healthy 'glow'.", nextQuestion: 200 },
            { text: "The appearance of fine lines and wrinkles.", nextQuestion: 200 },
        ]
    },
    {
        id: 21,
        question: "And what issue best describes your nails?",
        step: 3, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "They're weak, brittle, and just won't grow.", nextQuestion: 210 },
            { text: "I'm worried about discoloration or fungus.", nextQuestion: 210 },
        ]
    },

    // --- SKIN/NAILS PATH - STEP 4 ---
    {
        id: 200,
        question: "How do you prefer to care for your skin?",
        step: 4, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "With a high-quality, topical serum I can apply daily.", nextQuestion: 2000 },
            { text: "I believe true radiance starts from within, with nutrition.", nextQuestion: 2001 },
        ]
    },
    {
        id: 210,
        question: "When it comes to solutions, what's your preference?",
        step: 4, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "An easy-to-use spray or topical solution.", nextQuestion: 2100 },
            { text: "I'm open to anything that gets results.", nextQuestion: 2100 },
        ]
    },

    // --- SKIN/NAILS PATH - STEP 5 (FINAL) ---
    {
        id: 2000,
        question: "We have a plant-based serum that helps skin look flawless. Are you looking for a natural solution?",
        step: 5, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "Yes, plant-based and natural is important to me.", productId: 'hydrossential' },
            { text: "I'm focused on effectiveness above all.", productId: 'hydrossential' },
        ]
    },
    {
        id: 2001,
        question: "While we specialize in targeted solutions, a great diet is key. Our Smoothie Diet plan is packed with skin-loving nutrients.",
        step: 5, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "Interesting! Tell me more.", productId: 'smoothie_diet' },
            { text: "I'd prefer to stick with a direct skin product for now.", productId: 'hydrossential' },
        ]
    },
    {
        id: 2100,
        question: "ProNail Complex is a doctor-formulated mist that targets nail issues at the source. Does a powerful, targeted spray sound like the right fit?",
        step: 5, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "Yes, I need something potent and easy.", productId: 'pro_nail_complex' },
            { text: "A doctor-formulated solution sounds trustworthy.", productId: 'pro_nail_complex' },
        ]
    },
    
    // --- RELATIONSHIP PATH - STEP 2 ---
    {
        id: 3,
        question: "Connection is so important. What's your primary relationship goal today?",
        step: 2, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "To deepen the bond with my current partner.", nextQuestion: 30 },
            { text: "To heal from and possibly reunite after a breakup.", nextQuestion: 31 },
            { text: "To better understand men and what makes them commit.", nextQuestion: 32 },
        ]
    },

    // --- RELATIONSHIP PATH - STEP 3 ---
    {
        id: 30,
        question: "That's a wonderful goal. In what way do you want to strengthen your connection?",
        step: 3, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "By understanding his deepest desires and motivations.", nextQuestion: 300 },
            { text: "By supporting his health and well-being for the long term.", nextQuestion: 301 },
        ]
    },
    {
        id: 31,
        question: "Navigating a breakup is tough. What is your heart telling you to do?",
        step: 3, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "I feel like it's not truly over and want to try again.", nextQuestion: 310 },
            { text: "I need to understand what went wrong to either fix it or move on.", nextQuestion: 310 },
        ]
    },
    {
        id: 32,
        question: "Understanding the male perspective can be a superpower. What are you hoping to learn?",
        step: 3, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "What makes a man see a woman as 'the one'.", nextQuestion: 320 },
            { text: "How to create a deep, magnetic attraction.", nextQuestion: 320 },
        ]
    },

    // --- RELATIONSHIP PATH - STEP 4 ---
    {
        id: 300,
        question: "What do you feel is missing most right now?",
        step: 4, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "A sense of deep, emotional intimacy.", nextQuestion: 3000 },
            { text: "The feeling that he's truly, passionately 'in it' with me.", nextQuestion: 3000 },
        ]
    },
     {
        id: 301,
        question: "Supporting his physical health is a profound way to show you care. Are you open to suggesting a natural supplement for him?",
        step: 4, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "Yes, I think he would be open to that.", nextQuestion: 3010 },
            { text: "I'm not sure, but I'd like to learn more for him.", nextQuestion: 3010 },
        ]
    },
    {
        id: 310,
        question: "It takes courage to face this. What was the primary reason for the split, in your eyes?",
        step: 4, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "We grew distant / The passion faded.", nextQuestion: 3100 },
            { text: "A specific conflict or misunderstanding.", nextQuestion: 3100 },
        ]
    },
    {
        id: 320,
        question: "What's the main situation you're trying to improve?",
        step: 4, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "Getting a man to move from 'casual' to 'committed'.", nextQuestion: 3000 },
            { text: "Keeping the spark alive in a long-term relationship.", nextQuestion: 3000 },
        ]
    },

    // --- RELATIONSHIP PATH - STEP 5 (FINAL) ---
    {
        id: 3000,
        question: "There's a key psychological trigger in men called the 'Hero Instinct'. Are you curious to learn how to activate it to transform your bond?",
        step: 5, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "Yes! That sounds fascinating.", productId: 'his_secret_obsession' },
            { text: "Tell me more about what that means.", productId: 'his_secret_obsession' },
        ]
    },
    {
        id: 3010,
        question: "ProstaVive supports men's long-term health, which is a cornerstone of a happy life together. Does this approach of practical care resonate with you?",
        step: 5, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "Yes, showing I care in practical ways is important.", productId: 'prostavive' },
            { text: "Absolutely, his health is my health.", productId: 'prostavive' },
        ]
    },
    {
        id: 3100,
        question: "The Ex Factor is a guide using proven psychology to help with reconciliation. Does a step-by-step plan appeal to you right now?",
        step: 5, totalSteps: TOTAL_STEPS,
        answers: [
            { text: "Yes, I need a clear strategy right now.", productId: 'the_ex_factor' },
            { text: "I'm willing to try anything at this point.", productId: 'the_ex_factor' },
        ]
    }
];