const mongoose = require('mongoose');

// This is the blueprint for a single MBTI type's data
const mbtiSchema = new mongoose.Schema({
  ISTJ: {
    songs: ["Beethoven – Symphony No.5", "Yiruma – River Flows in You", "Coldplay – Clocks", "John Mayer – Stop This Train", "A. R. Rahman – Vande Mataram", "Arijit Singh – Agar Tum Saath Ho (Tamasha)", "Shankar-Ehsaan-Loy – Mitwa (Kabhi Alvida Naa Kehna)", "Sonu Nigam – Kal Ho Naa Ho (Title Track)", "Mohit Chauhan – Tum Se Hi (Jab We Met)"],
    books: ["Atomic Habits – James Clear", "Meditations – Marcus Aurelius", "The 7 Habits of Highly Effective People – Stephen R. Covey", "Deep Work – Cal Newport", "The Checklist Manifesto – Atul Gawande", "Principles – Ray Dalio", "Essentialism – Greg McKeown", "The Power of Habit – Charles Duhigg", "Grit – Angela Duckworth", "Godaan – Munshi Premchand"],
    careers: ["Auditor", "Data Analyst", "Banker", "Civil Engineer", "Judge", "Supply Chain Manager", "Accountant", "IT Systems Admin", "Statistician", "Military Officer"],
    movies: ["The Imitation Game", "Bridge of Spies", "Apollo 13", "Twelve Angry Men", "Schindler's List", "Swades (2004 – Ashutosh Gowariker)", "Chak De! India (2007 – Shimit Amin)", "Lagaan (2001 – Ashutosh Gowariker)", "Neerja (2016 – Ram Madhvani)", "Talvar (2015 – Meghna Gulzar)"]
  },
  ISFJ: {
    songs: ["Adele – Someone Like You", "Ed Sheeran – Photograph", "Taylor Swift – Lover", "Norah Jones – Come Away With Me", "Arijit Singh – Khamoshiyan", "Shreya Ghoshal – Teri Ore (Singh is Kinng)", "Sonu Nigam – Abhi Mujh Mein Kahin (Agneepath)", "Atif Aslam – Tera Hone Laga Hoon (Ajab Prem Ki Ghazab Kahani)", "Shankar Mahadevan – Maa (Taare Zameen Par)"],
    books: ["Little Women – Louisa May Alcott", "The Book Thief – Markus Zusak", "Wonder – R. J. Palacio", "Becoming – Michelle Obama", "Educated – Tara Westover", "Chicken Soup for the Soul – Jack Canfield", "The Shack – William P. Young", "All the Light We Cannot See – Anthony Doerr", "Nirmala – Munshi Premchand", "Sevasadan – Munshi Premchand", "Gaban – Munshi Premchand"],
    careers: ["Teacher", "Nurse", "Social Worker", "Counselor", "Librarian", "HR Specialist", "Dietitian", "Museum Curator", "Childcare Worker", "Admin Assistant"],
    movies: ["The Help", "Wonder", "The Pursuit of Happyness", "Hidden Figures", "Little Women (2019)", "Taare Zameen Par (2007 – Aamir Khan)", "Baghban (2003 – Ravi Chopra)", "Barfi! (2012 – Anurag Basu)", "Kapoor & Sons (2016 – Shakun Batra)", "Chhichhore (2019 – Nitesh Tiwari)"]
  },
  INFJ: {
    songs: ["Aurora – Runaway", "Hozier – Cherry Wine", "Florence + The Machine – Shake It Out", "Lana Del Rey – Young and Beautiful", "Bon Iver – Holocene", "Cigarettes After Sex – Nothing's Gonna Hurt You Baby", "Arijit Singh – Channa Mereya (Ae Dil Hai Mushkil)", "Mohit Chauhan – Tum Ho (Rockstar)", "Amit Trivedi – Iktara (Wake Up Sid)", "Shreya Ghoshal – Sun Raha Hai (Aashiqui 2)"],
    books: ["The Alchemist – Paulo Coelho", "Man's Search for Meaning – Viktor Frankl", "Siddhartha – Hermann Hesse", "The Prophet – Kahlil Gibran", "Norwegian Wood – Haruki Murakami", "Quiet – Susan Cain", "Letters to a Young Poet – Rainer Maria Rilke", "Brave New World – Aldous Huxley", "Godaan – Munshi Premchand", "Gunahon Ka Devta – Dharamvir Bharati", "Madhushala – Harivansh Rai Bachchan", "Surya Ke Saat Ghode – Dharamvir Bharati", "Aadha Gaon – Rahi Masoom Raza"],
    careers: ["Psychologist", "Writer", "Professor", "Social Worker", "Counselor", "Filmmaker (indie)", "Life Coach", "Diplomat", "NGO Director", "Spiritual Teacher"],
    movies: ["Eternal Sunshine of the Spotless Mind", "Dead Poets Society", "Life of Pi", "Her", "Cloud Atlas", "Good Will Hunting", "Into the Wild", "Tamasha (2015 – Imtiaz Ali)", "Rockstar (2011 – Imtiaz Ali)", "Udaan (2010 – Vikramaditya Motwane)", "Zindagi Na Milegi Dobara (2011 – Zoya Akhtar)"]
  },
  INTJ: {
    songs: ["Hans Zimmer – Time (Inception)", "Radiohead – Everything in Its Right Place", "Daft Punk – Derezzed", "Pink Floyd – Time", "Muse – Uprising", "A. R. Rahman – Dil Se Re (Dil Se)", "Amit Trivedi – Nayan Tarse (Dev.D)", "Lucky Ali – O Sanam", "Euphoria – Maeri", "Shankar-Ehsaan-Loy – Dil Chahta Hai (Title Track)"],
    books: ["1984 – George Orwell", "The Art of War – Sun Tzu", "Sapiens – Yuval Noah Harari", "Crime and Punishment – Fyodor Dostoevsky", "Atlas Shrugged – Ayn Rand", "Thinking in Systems – Donella Meadows", "The Prince – Niccolò Machiavelli", "Gödel, Escher, Bach – Douglas Hofstadter", "Antifragile – Nassim Taleb", "The Selfish Gene – Richard Dawkins", "Superintelligence – Nick Bostrom", "Tamas – Bhisham Sahni"],
    careers: ["Strategist", "Research Scientist", "Entrepreneur", "AI Specialist", "Aerospace Engineer", "Software Architect", "Consultant", "Policy Advisor", "Financial Analyst", "Mathematician"],
    movies: ["Inception", "Interstellar", "The Social Network", "The Matrix", "Blade Runner 2049", "Ex Machina", "The Prestige", "Arrival", "Tenet", "Gully Boy (2019 – Zoya Akhtar)", "Andhadhun (2018 – Sriram Raghavan)", "Article 15 (2019 – Anubhav Sinha)"]
  },
  ISTP: {
    songs: ["AC/DC – Back in Black", "Metallica – Nothing Else Matters", "Linkin Park – In the End", "Imagine Dragons – Believer", "Coldplay – Viva La Vida", "A. R. Rahman – Humma Humma (Bombay)", "Vishal-Shekhar – Desi Girl (Dostana)", "Badshah – DJ Waley Babu", "Divine – Apna Time Aayega (Gully Boy)", "Amit Trivedi – Namo Namo (Kedarnath)"],
    books: ["Zen and the Art of Motorcycle Maintenance – Robert M. Pirsig", "Into the Wild – Jon Krakauer", "The Martian – Andy Weir", "Endurance – Alfred Lansing", "Hatchet – Gary Paulsen", "The Call of the Wild – Jack London", "Meditations – Marcus Aurelius", "Digital Fortress – Dan Brown", "Shantaram – Gregory David Roberts", "Pinjar – Amrita Pritam", "Jhansi Ki Rani – Subhadra Kumari Chauhan", "Train to Pakistan – Khushwant Singh"],
    careers: ["Pilot", "Engineer (mechanical / civil)", "Detective", "Firefighter", "Athlete", "Paramedic", "IT Troubleshooter", "Military Officer", "Photographer", "Automotive Designer"],
    movies: ["Mad Max: Fury Road", "The Bourne Identity", "The Dark Knight", "The Revenant", "The Hurt Locker", "Uri: The Surgical Strike (2019 – Aditya Dhar)", "Baby (2015 – Neeraj Pandey)", "Dhoom 2 (2006 – Sanjay Gadhvi)", "War (2019 – Siddharth Anand)", "Shershaah (2021 – Vishnuvardhan)"]
  },
  ISFP: {
    songs: ["Billie Eilish – Ocean Eyes", "Ed Sheeran – Thinking Out Loud", "Lana Del Rey – Summertime Sadness", "Lorde – Royals", "Shawn Mendes – Treat You Better", "Arijit Singh – Tum Hi Ho (Aashiqui 2)", "Shreya Ghoshal – Teri Meri (Bodyguard)", "Mohit Chauhan – Phir Se Ud Chala (Rockstar)", "Papon – Jiyein Kyun (Dum Maaro Dum)", "Amit Trivedi – Sham (Aisha)"],
    books: ["The Secret Life of Bees – Sue Monk Kidd", "The Color Purple – Alice Walker", "The Great Gatsby – F. Scott Fitzgerald", "The Joy Luck Club – Amy Tan", "Big Magic – Elizabeth Gilbert", "Wild – Cheryl Strayed", "The Little Prince – Antoine de Saint-Exupéry", "The Namesake – Jhumpa Lahiri", "Gunahon Ka Devta – Dharamvir Bharati", "Madhushala – Harivansh Rai Bachchan", "Kamayani – Jaishankar Prasad", "Surya Ke Saat Ghode – Dharamvir Bharati"],
    careers: ["Musician", "Fashion Designer", "Graphic Designer", "Painter", "Actor", "Photographer", "Interior Designer", "Chef", "Illustrator", "Dancer"],
    movies: ["La La Land", "Amélie", "Call Me By Your Name", "Before Sunrise", "The Shape of Water", "Rockstar (2011 – Imtiaz Ali)", "Barfi! (2012 – Anurag Basu)", "Tamasha (2015 – Imtiaz Ali)", "Yeh Jawaani Hai Deewani (2013 – Ayan Mukerji)", "Dil Dhadakne Do (2015 – Zoya Akhtar)"]
  },
  INFP: {
    songs: ["Coldplay – Fix You", "Bon Iver – Skinny Love", "Florence + The Machine – Cosmic Love", "The Lumineers – Ophelia", "Daughter – Youth", "Arijit Singh – Muskurane (Citylights)", "Mohit Chauhan – Jo Bhi Main (Rockstar)", "Papon – Moh Moh Ke Dhaage (Dum Laga Ke Haisha)", "Prateek Kuhad – Kasoor", "Lucky Ali – Safarnama"],
    books: ["The Alchemist – Paulo Coelho", "Siddhartha – Hermann Hesse", "Man's Search for Meaning – Viktor Frankl", "The Little Prince – Antoine de Saint-Exupéry", "Norwegian Wood – Haruki Murakami", "The Bell Jar – Sylvia Plath", "Tuesdays with Morrie – Mitch Albom", "The Prophet – Kahlil Gibran", "Gunahon Ka Devta – Dharamvir Bharati", "Madhushala – Harivansh Rai Bachchan", "Godaan – Munshi Premchand", "Surya Ke Saat Ghode – Dharamvir Bharati", "Premchand ki Kahaniyan – Munshi Premchand"],
    careers: ["Writer / Poet", "Psychologist", "Filmmaker", "NGO Worker", "Counselor", "Music Composer", "Teacher (literature/philosophy)", "Novelist", "Spiritual Guide", "Humanitarian Worker"],
    movies: ["Eternal Sunshine of the Spotless Mind", "Into the Wild", "The Secret Life of Walter Mitty", "Good Will Hunting", "Her", "Udaan (2010 – Vikramaditya Motwane)", "Tamasha (2015 – Imtiaz Ali)", "Wake Up Sid (2009 – Ayan Mukerji)", "Zindagi Na Milegi Dobara (2011 – Zoya Akhtar)", "Rockstar (2011 – Imtiaz Ali)"]
  },
  INTP: {
    songs: ["Pink Floyd – Comfortably Numb", "Radiohead – Paranoid Android", "Muse – Starlight", "Tool – Schism", "Daft Punk – Harder, Better, Faster, Stronger", "A. R. Rahman – Roja Jaaneman (Roja)", "Amit Trivedi – Ud-Daa Punjab (Udta Punjab)", "Lucky Ali – Dekha Hai Aise Bhi", "Indian Ocean – Bandeh", "Raghu Dixit Project – Hey Bhagwan"],
    books: ["Gödel, Escher, Bach – Douglas Hofstadter", "Thinking, Fast and Slow – Daniel Kahneman", "A Brief History of Time – Stephen Hawking", "The Selfish Gene – Richard Dawkins", "The Structure of Scientific Revolutions – Thomas Kuhn", "The Code Book – Simon Singh", "Zero to One – Peter Thiel", "Superintelligence – Nick Bostrom", "Raag Darbari – Shrilal Shukla", "Train to Pakistan – Khushwant Singh", "Tamas – Bhisham Sahni", "Premchand ki Nirmala – Munshi Premchand"],
    careers: ["Research Scientist", "Philosopher", "Inventor", "Data Scientist", "Mathematician", "Professor", "Theoretical Physicist", "Game Developer", "Engineer", "Policy Analyst"],
    movies: ["The Matrix", "Interstellar", "A Beautiful Mind", "Ex Machina", "Arrival", "Andhadhun (2018 – Sriram Raghavan)", "Ship of Theseus (2013 – Anand Gandhi)", "Court (2014 – Chaitanya Tamhane)", "Tamasha (2015 – Imtiaz Ali)", "3 Idiots (2009 – Rajkumar Hirani)"]
  },
  ESTP: {
    songs: ["Drake – God's Plan", "Eminem – Till I Collapse", "AC/DC – Highway to Hell", "Jay-Z – Run This Town", "Imagine Dragons – Thunder", "Badshah – Abhi Toh Party Shuru Hui Hai", "Yo Yo Honey Singh – Desi Kalakaar", "Vishal-Shekhar – India Waale (Happy New Year)", "Arijit Singh – Ilahi (YJHD)", "Nucleya – Bass Rani"],
    books: ["The Power of Now – Eckhart Tolle", "Shoe Dog – Phil Knight", "Can't Hurt Me – David Goggins", "Rich Dad Poor Dad – Robert Kiyosaki", "Tools of Titans – Tim Ferriss", "Born to Run – Christopher McDougall", "You Only Live Once – Lonely Planet Guide", "The Subtle Art of Not Giving a F*ck – Mark Manson", "Shantaram – Gregory David Roberts", "Jhansi Ki Rani – Subhadra Kumari Chauhan", "Pinjar – Amrita Pritam"],
    careers: ["Entrepreneur", "Sales Executive", "Actor", "Athlete", "Stockbroker", "Pilot", "Event Manager", "Marketing Head", "Travel Blogger", "Stunt Performer"],
    movies: ["The Wolf of Wall Street", "Fast & Furious series", "The Dark Knight Rises", "Mission Impossible series", "Casino Royale", "Zindagi Na Milegi Dobara (2011 – Zoya Akhtar)", "War (2019 – Siddharth Anand)", "Dhoom (2004 – Sanjay Gadhvi)", "Student of the Year (2012 – Karan Johar)", "Bang Bang (2014 – Siddharth Anand)"]
  },
  ESFP: {
    songs: ["Bruno Mars – Uptown Funk", "Beyoncé – Single Ladies", "Dua Lipa – Levitating", "Harry Styles – Watermelon Sugar", "Rihanna – Diamonds", "Arijit Singh – Subhanallah (YJHD)", "Shreya Ghoshal – Radha (Student of the Year)", "Badshah – DJ Waley Babu", "Honey Singh – Angrezi Beat", "Vishal-Shekhar – Desi Girl (Dostana)"],
    books: ["Big Magic – Elizabeth Gilbert", "Eat Pray Love – Elizabeth Gilbert", "You Are a Badass – Jen Sincero", "Yes Man – Danny Wallace", "The Happiness Project – Gretchen Rubin", "The Art of Happiness – Dalai Lama", "Tiny Beautiful Things – Cheryl Strayed", "The Namesake – Jhumpa Lahiri", "Madhushala – Harivansh Rai Bachchan", "Surya Ke Saat Ghode – Dharamvir Bharati", "Nirmala – Munshi Premchand"],
    careers: ["Actor", "Dancer", "Singer", "Fashion Designer", "Event Planner", "PR Specialist", "Travel Blogger", "Radio Jockey", "Model", "Influencer"],
    movies: ["The Greatest Showman", "La La Land", "Crazy Rich Asians", "Moulin Rouge!", "Legally Blonde", "Yeh Jawaani Hai Deewani (2013 – Ayan Mukerji)", "Dil Dhadakne Do (2015 – Zoya Akhtar)", "Student of the Year (2012 – Karan Johar)", "Jab We Met (2007 – Imtiaz Ali)", "Om Shanti Om (2007 – Farah Khan)"]
  },
  ENFP: {
    songs: ["Coldplay – Adventure of a Lifetime", "Imagine Dragons – On Top of the World", "Ed Sheeran – Castle on the Hill", "OneRepublic – Counting Stars", "Pharrell Williams – Happy", "Arijit Singh – Ilahi (YJHD)", "Mohit Chauhan – Jo Bhi Main (Rockstar)", "Papon – Humnava (Hamari Adhuri Kahani)", "Lucky Ali – O Sanam", "Prateek Kuhad – Cold Mess"],
    books: ["The Alchemist – Paulo Coelho", "The Untethered Soul – Michael A. Singer", "Big Magic – Elizabeth Gilbert", "The Art of Possibility – Rosamund Stone Zander", "The Happiness Advantage – Shawn Achor", "Steppenwolf – Hermann Hesse", "Walden – Henry David Thoreau", "Tuesdays with Morrie – Mitch Albom", "Gunahon Ka Devta – Dharamvir Bharati", "Madhushala – Harivansh Rai Bachchan", "Premchand ki Kahaniyan – Munshi Premchand"],
    careers: ["Motivational Speaker", "Travel Writer", "Filmmaker", "Actor", "Startup Founder", "Creative Director", "Social Worker", "Journalist", "Marketing Specialist", "Podcaster"],
    movies: ["Into the Wild", "The Secret Life of Walter Mitty", "Good Will Hunting", "Amélie", "Dead Poets Society", "Tamasha (2015 – Imtiaz Ali)", "Zindagi Na Milegi Dobara (2011 – Zoya Akhtar)", "Wake Up Sid (2009 – Ayan Mukerji)", "Dil Chahta Hai (2001 – Farhan Akhtar)", "Rang De Basanti (2006 – Rakeysh Omprakash Mehra)"]
  },
  ENTP: {
    songs: ["Kanye West – Power", "Drake – Started From the Bottom", "Eminem – Without Me", "Queen – Don't Stop Me Now", "The Weeknd – Blinding Lights", "Divine – Mirchi", "Raftaar – Dhaakad", "Yo Yo Honey Singh – Brown Rang", "Badshah – Garmi", "Arijit Singh – Galti Se Mistake (Jagga Jasoos)"],
    books: ["Freakonomics – Steven Levitt", "Outliers – Malcolm Gladwell", "Originals – Adam Grant", "The Lean Startup – Eric Ries", "The Innovator's Dilemma – Clayton Christensen", "The Tipping Point – Malcolm Gladwell", "Zero to One – Peter Thiel", "Fooled by Randomness – Nassim Taleb", "Raag Darbari – Shrilal Shukla", "Train to Pakistan – Khushwant Singh", "Tamas – Bhisham Sahni"],
    careers: ["Entrepreneur", "Lawyer", "Actor", "Journalist", "Politician", "Startup Founder", "Marketing Head", "Stand-up Comedian", "Venture Capitalist", "Creative Director"],
    movies: ["The Big Short", "The Wolf of Wall Street", "The Social Network", "Catch Me If You Can", "Steve Jobs", "Rocket Singh: Salesman of the Year (2009 – Shimit Amin)", "Band Baaja Baaraat (2010 – Maneesh Sharma)", "Fukrey (2013 – Mrighdeep Singh Lamba)", "Oye Lucky! Lucky Oye! (2008 – Dibakar Banerjee)", "Guru (2007 – Mani Ratnam)"]
  },
  ESTJ: {
    songs: ["Queen – We Will Rock You", "Bon Jovi – It's My Life", "Bruce Springsteen – Born to Run", "Imagine Dragons – Thunder", "Coldplay – Viva La Vida", "A. R. Rahman – Jai Ho (Slumdog Millionaire)", "Shankar-Ehsaan-Loy – Rock On!! (Rock On!!)", "Arijit Singh – Zinda (Bhaag Milkha Bhaag)", "Amit Trivedi – Aashayein (Iqbal)"],
    books: ["The 7 Habits of Highly Effective People – Stephen R. Covey", "Principles – Ray Dalio", "Good to Great – Jim Collins", "Drive – Daniel Pink", "Leadership in Turbulent Times – Doris Kearns Goodwin", "Execution – Larry Bossidy", "The Effective Executive – Peter Drucker", "The Goal – Eliyahu Goldratt", "Godaan – Munshi Premchand", "Raag Darbari – Shrilal Shukla", "Sevasadan – Munshi Premchand"],
    careers: ["CEO", "Lawyer", "Banker", "Judge", "Military Commander", "School Principal", "Project Manager", "Politician", "Police Officer", "Operations Manager"],
    movies: ["The Godfather", "Lincoln", "The Social Network", "Moneyball", "The Founder", "Chak De! India (2007 – Shimit Amin)", "Sardar (1993 – Ketan Mehta)", "Lagaan (2001 – Ashutosh Gowariker)", "Airlift (2016 – Raja Krishna Menon)", "Pink (2016 – Aniruddha Roy Chowdhury)"]
  },
  ESFJ: {
    songs: ["Elton John – Your Song", "Adele – Hello", "Taylor Swift – You Belong With Me", "Ed Sheeran – Perfect", "Celine Dion – My Heart Will Go On", "Arijit Singh – Tera Yaar Hoon Main (Sonu Ke Titu Ki Sweety)", "Shreya Ghoshal – Saans (Jab Tak Hai Jaan)", "Sonu Nigam – Suraj Hua Maddham (Kabhi Khushi Kabhie Gham)", "Mohit Chauhan – Masakali (Delhi-6)"],
    books: ["Pride and Prejudice – Jane Austen", "Little Women – Louisa May Alcott", "Anne of Green Gables – L. M. Montgomery", "The Help – Kathryn Stockett", "Big Magic – Elizabeth Gilbert", "Eat Pray Love – Elizabeth Gilbert", "Becoming – Michelle Obama", "Chicken Soup for the Soul – Jack Canfield", "Nirmala – Munshi Premchand", "Gaban – Munshi Premchand", "Baghban (novel adaptation version)"],
    careers: ["Teacher", "Nurse", "HR Manager", "Event Planner", "Social Worker", "Counselor", "Public Relations Officer", "Dietitian", "Customer Service Manager", "Caregiver"],
    movies: ["The Sound of Music", "The Help", "Hidden Figures", "Little Women (2019)", "Julie & Julia", "Taare Zameen Par (2007 – Aamir Khan)", "Baghban (2003 – Ravi Chopra)", "Hum Aapke Hain Koun..! (1994 – Sooraj Barjatya)", "Kapoor & Sons (2016 – Shakun Batra)", "Chhichhore (2019 – Nitesh Tiwari)"]
  },
  ENFJ: {
    songs: ["U2 – Beautiful Day", "Coldplay – Paradise", "John Legend – All of Me", "Beyoncé – Halo", "Michael Jackson – Heal the World", "Arijit Singh – Jeene Ke Hain Chaar Din (Mujhse Shaadi Karogi)", "Shankar Mahadevan – Breathless", "Mohit Chauhan – Tum Se Hi (Jab We Met)", "Amit Trivedi – London Thumakda (Queen)"],
    books: ["To Kill a Mockingbird – Harper Lee", "The Kite Runner – Khaled Hosseini", "A Thousand Splendid Suns – Khaled Hosseini", "Man's Search for Meaning – Viktor Frankl", "The Book Thief – Markus Zusak", "Daring Greatly – Brené Brown", "The Art of Happiness – Dalai Lama", "Start With Why – Simon Sinek", "Gunahon Ka Devta – Dharamvir Bharati", "Godaan – Munshi Premchand", "Nirmala – Munshi Premchand"],
    careers: ["Teacher", "Counselor", "Politician", "Social Worker", "Writer", "NGO Director", "Journalist", "Public Speaker", "Coach / Mentor", "Diplomat"],
    movies: ["Dead Poets Society", "The Pursuit of Happyness", "Freedom Writers", "Remember the Titans", "Pay It Forward", "Swades (2004 – Ashutosh Gowariker)", "Rang De Basanti (2006 – Rakeysh Omprakash Mehra)", "Chak De! India (2007 – Shimit Amin)", "Guru (2007 – Mani Ratnam)", "Article 15 (2019 – Anubhav Sinha)"]
  },
  ENTJ: {
    songs: ["Kanye West – Stronger", "Eminem – Lose Yourself", "Jay-Z – Empire State of Mind", "Imagine Dragons – Warriors", "Survivor – Eye of the Tiger", "A. R. Rahman – Maa Tujhe Salaam", "Amit Trivedi – Dhakad (Dangal)", "Divine – Kohinoor", "Baadshah – Genda Phool", "Vishal Dadlani – Dhoom Again (Dhoom 2)"],
    books: ["The 48 Laws of Power – Robert Greene", "The Prince – Niccolò Machiavelli", "Atlas Shrugged – Ayn Rand", "Leaders Eat Last – Simon Sinek", "Good to Great – Jim Collins", "Shoe Dog – Phil Knight", "The Hard Thing About Hard Things – Ben Horowitz", "Sapiens – Yuval Noah Harari", "Train to Pakistan – Khushwant Singh", "Raag Darbari – Shrilal Shukla", "Tamas – Bhisham Sahni"],
    careers: ["CEO", "Politician", "Business Consultant", "Lawyer", "Entrepreneur", "Venture Capitalist", "Judge", "Tech Innovator", "Army General", "Corporate Strategist"],
    movies: ["The Wolf of Wall Street", "The Social Network", "The Godfather", "Gladiator", "Steve Jobs", "Sarkar (2005 – Ram Gopal Varma)", "Guru (2007 – Mani Ratnam)", "Raajneeti (2010 – Prakash Jha)", "Dangal (2016 – Nitesh Tiwari)", "Lakshya (2004 – Farhan Akhtar)"]
  }
});

// This creates the model so we can use it elsewhere
module.exports = mongoose.model('MBTI', mbtiSchema);