import type { PathfinderNode } from './types';
import {
    User, Search, BookOpen, GraduationCap, Sparkles,
    Flag, Compass, Target, FileText, ClipboardList,
    Star, DollarSign, Mail, Calendar, CheckSquare,
    TrendingUp, Globe, Award, Microscope, Palette,
    Music, Code, Heart, Building, PenTool, BarChart
} from 'lucide-svelte';

// ─────────────────────────────────────────────
// PLACEHOLDER TEXT — easy to find & replace
// ─────────────────────────────────────────────

const PLACEHOLDER_DESC = 'Resource description placeholder — replace with real content.';

function res(id: string, title: string, url: string, type: NodeResource['type']) {
    return {
        id,
        title,
        description: PLACEHOLDER_DESC,
        url,
        type,
        completed: false,
    };
}

// Import type here so the helper above works
import type { NodeResource } from './types';

export const nodes: PathfinderNode[] = [

    // ════════════════════════════════════════
    // PHASE 1 — SELF ASSESSMENT (Levels 0–1)
    // ════════════════════════════════════════

    {
        id: 'node-0',
        title: 'Start Here',
        description: 'PLACEHOLDER — Welcome node. Orients the student to the college application process as an incoming senior.',
        status: 'completed',
        level: 0,
        position: 'center',
        icon: User,
        resources: [
            res('0-1', 'What Is the College Application Process?', 'https://www.commonapp.org/plan/your-path-to-college', 'guide'),
            res('0-2', 'Senior Year Timeline Overview', 'https://bigfuture.collegeboard.org/plan-for-college/college-prep/pre-college-calendar/senior-year-calendar', 'article'),
            res('0-3', 'Common App vs Coalition App Explained', 'https://www.usnews.com/education/best-colleges/articles/common-app-vs-coalition-app-what-is-the-difference', 'official'),
            res('0-4', 'How Admissions Officers Read Applications', 'https://www.youtube.com/watch?v=Y_f7_O_vQ9I', 'video'),
            res('0-5', 'Understanding Holistic Review', 'https://admission.princeton.edu/apply/how-we-make-decisions', 'article'),
            res('0-6', 'FAFSA & Aid Overview (Early Peek)', 'https://studentaid.gov/h/understand-aid/how-it-works', 'official'),
            res('0-7', 'Setting Up Your Application Workspace', 'https://www.collegeessayguy.com/blog/how-to-stay-organized-college-applications', 'tool'),
        ],
    },

    {
        id: 'node-1',
        title: 'Know Yourself',
        description: 'PLACEHOLDER — Self-assessment of strengths, values, interests, and goals before building a college list.',
        status: 'completed',
        level: 1,
        position: 'center',
        icon: Target,
        resources: [
            res('1-1', 'College Board BigFuture Interest Inventory', 'https://roadtripnation.com/edu/career-exploration', 'tool'),
            res('1-2', 'How to Identify Your Core Strengths', 'https://www.viacharacter.org/character-strengths', 'guide'),
            res('1-3', 'Values Clarification Exercise', 'https://www.collegeessayguy.com/blog/values-exercise', 'article'),
            res('1-4', 'What Do You Want From College? (Framework)', 'https://mcc.gse.harvard.edu/resources-for-families/choosing-a-college', 'guide'),
            res('1-5', 'Career Exploration for High Schoolers', 'https://www.bls.gov/k12/students/careers/career-exploration.htm', 'tool'),
            res('1-6', 'Personality & Learning Style Assessments', 'https://www.16personalities.com/free-personality-test', 'tool'),
            res('1-7', 'Journaling Prompts for College Readiness', 'https://www.huffpost.com/entry/20-questions-to-ask-befor_b_5692095', 'article'),
        ],
    },

    {
        id: 'node-1-l',
        title: 'STEM Self-Audit',
        description: 'PLACEHOLDER — Branch for students leaning toward STEM. Evaluate math/science strengths and research interests.',
        status: 'completed',
        level: 1,
        position: 'left',
        icon: Microscope,
        track: 'stem',
        resources: [
            res('1l-1', 'STEM College Readiness Checklist', 'https://petersons.com/blog/how-to-prepare-for-a-stem-degree-in-high-school/', 'guide'),
            res('1l-2', 'Research vs Engineering vs Pre-Med Paths', 'https://www.manhattanprep.com/lsat/blog/pre-med-vs-pre-law-vs-stem/', 'article'),
            res('1l-3', 'AP/IB Science Course Impact on Admissions', 'https://admissions.yale.edu/advice-selecting-high-school-courses', 'article'),
            res('1l-4', 'Math Readiness Self-Assessment', 'https://www.maa.org/student-resources/pathways-to-calculus', 'tool'),
            res('1l-5', 'Top STEM Programs to Know', 'https://www.usnews.com/best-colleges/rankings/engineering-overall', 'guide'),
            res('1l-6', 'Science Olympiad & Competition Landscape', 'https://www.soinc.org/play/tournaments', 'article'),
            res('1l-7', 'How to Talk About STEM Passion in Essays', 'https://www.collegeessayguy.com/blog/engineering-essays', 'guide'),
        ],
    },

    {
        id: 'node-1-r',
        title: 'Humanities Self-Audit',
        description: 'PLACEHOLDER — Branch for students leaning toward humanities/arts. Evaluate writing, critical thinking, and creative strengths.',
        status: 'completed',
        level: 1,
        position: 'right',
        icon: PenTool,
        track: 'humanities',
        resources: [
            res('1r-1', 'Humanities & Social Sciences College Paths', 'https://www.americanhumanities.org/why-humanities/', 'guide'),
            res('1r-2', 'How Writing Skills Are Evaluated in Admissions', 'https://www.khanacademy.org/college-admissions/applying-to-college/admissions-essays/a/the-role-of-the-essay-in-admissions', 'article'),
            res('1r-3', 'Liberal Arts vs Research University Differences', 'https://bigfuture.collegeboard.org/plan-for-college/find-your-fit/types-of-colleges/liberal-arts-colleges-vs-universities', 'article'),
            res('1r-4', 'AP Humanities Courses and Their Value', 'https://blog.prepscholar.com/which-ap-classes-should-you-take', 'article'),
            res('1r-5', 'Building a Portfolio Mindset Early', 'https://admissions.dartmouth.edu/apply/application-tips/optional-arts-exchange', 'guide'),
            res('1r-6', 'Debate, MUN, and Humanities Competitions', 'https://www.nationalgeographic.org/society/education-resources/competitions/', 'article'),
            res('1r-7', 'Showcasing Intellectual Curiosity in Apps', 'https://veritasprep.com/blog/how-to-showcase-intellectual-curiosity-in-college-applications/', 'guide'),
        ],
    },

    // ════════════════════════════════════════
    // PHASE 2 — COLLEGE LIST (Levels 2–3)
    // ════════════════════════════════════════

    {
        id: 'node-2',
        title: 'Build Your College List',
        description: 'PLACEHOLDER — Research and categorize schools into reach, target, and safety tiers based on stats and fit.',
        status: 'completed',
        level: 2,
        position: 'center',
        icon: ClipboardList,
        resources: [
            res('2-1', 'How to Build a Balanced College List', 'https://www.collegeessayguy.com/blog/how-to-create-a-college-list', 'guide'),
            res('2-2', 'Naviance / Scattergrams Explained', 'https://www.youtube.com/watch?v=p4vW7UqL8U0', 'tool'),
            res('2-3', 'Niche.com School Research Tool', 'https://www.niche.com/colleges/search/all-colleges/', 'tool'),
            res('2-4', 'Understanding Acceptance Rate Data', 'https://www.collegedata.com/resources/the-facts-on-fit/understanding-acceptance-rates', 'article'),
            res('2-5', 'College Scorecard (Official Gov Data)', 'https://collegescorecard.ed.gov/', 'official'),
            res('2-6', 'Reach vs Target vs Safety — Real Definitions', 'https://bigfuture.collegeboard.org/plan-for-college/find-your-fit/build-your-college-list/reach-target-safety-colleges', 'article'),
            res('2-7', 'How Many Schools Should You Apply To?', 'https://www.princetonreview.com/college-advice/how-many-colleges-should-i-apply-to', 'guide'),
        ],
    },

    {
        id: 'node-2-l',
        title: 'Public University Track',
        description: 'PLACEHOLDER — Branch for students prioritizing in-state public universities and flagship schools.',
        status: 'upcoming',
        level: 2,
        position: 'left',
        icon: Building,
        resources: [
            res('2l-1', 'In-State vs Out-of-State Tuition Breakdown', 'https://academicinfluence.com/resources/college-planning/financing/in-state-vs-out-of-state-tuition', 'calculator'),
            res('2l-2', 'How State Flagship Admissions Work', 'https://www.bestcolleges.com/blog/what-is-a-flagship-university/', 'guide'),
            res('2l-3', 'UC System Application Overview', 'https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-freshman/', 'official'),
            res('2l-4', 'Honors Programs at Public Universities', 'https://publicuniversityhonors.com/', 'article'),
            res('2l-5', 'Merit Aid at Public Schools', 'https://recap.com/blog/top-merit-aid-public-universities', 'guide'),
            res('2l-6', 'Research Opportunities at Large Publics', 'https://research.gatech.edu/undergraduate-research-opportunities-program-urop', 'article'),
            res('2l-7', 'Top Public University Programs by Major', 'https://www.usnews.com/best-colleges/rankings/national-universities/top-public-schools', 'guide'),
        ],
    },

    {
        id: 'node-2-r',
        title: 'Private University Track',
        description: 'PLACEHOLDER — Branch for students targeting private colleges including LACs and research universities.',
        status: 'upcoming',
        level: 2,
        position: 'right',
        icon: Award,
        resources: [
            res('2r-1', 'Liberal Arts Colleges vs Research Universities', 'https://www.forbes.com/advisor/education/liberal-arts-college-vs-university/', 'article'),
            res('2r-2', 'How Need-Blind Admissions Works', 'https://www.usnews.com/education/best-colleges/paying-for-college/articles/what-it-means-to-be-need-blind', 'guide'),
            res('2r-3', 'Common Data Set — How to Read It', 'https://www.collegedata.com/resources/the-facts-on-fit/common-data-set', 'tool'),
            res('2r-4', 'Small Class Sizes & Mentorship Culture', 'https://www.petersons.com/blog/the-benefits-of-small-class-sizes-in-college/', 'article'),
            res('2r-5', 'Top Liberal Arts Colleges Overview', 'https://www.usnews.com/best-colleges/rankings/national-liberal-arts-colleges', 'guide'),
            res('2r-6', 'Why LACs Are Underrated for STEM', 'https://www.thecollegesolution.com/the-best-colleges-for-stem-majors/', 'article'),
            res('2r-7', 'Ivy League & Highly Selective Schools Reality Check', 'https://www.nytimes.com/2023/03/30/learning/how-to-deal-with-college-rejection.html', 'article'),
        ],
    },

    {
        id: 'node-3',
        title: 'Campus Fit Research',
        description: 'PLACEHOLDER — Go beyond rankings. Evaluate culture, size, location, programs, and student life fit.',
        status: 'current',
        level: 3,
        position: 'center',
        icon: Search,
        resources: [
            res('3-1', 'Virtual Campus Tour Platforms', 'https://www.youvisit.com/collegesearch/', 'tool'),
            res('3-2', 'What Questions to Ask on a College Visit', 'https://bigfuture.collegeboard.org/plan-for-college/find-your-fit/campus-visits/campus-visit-checklist', 'guide'),
            res('3-3', 'How to Use Reddit for Honest College Reviews', 'https://www.reddit.com/r/ApplyingToCollege/', 'article'),
            res('3-4', 'Evaluating Student-to-Faculty Ratios', 'https://www.usnews.com/education/best-colleges/articles/what-student-faculty-ratio-means', 'article'),
            res('3-5', 'Greek Life, Clubs & Culture Research', 'https://www.unigo.com/college-reviews', 'guide'),
            res('3-6', 'Location & Cost of Living Considerations', 'https://www.nerdwallet.com/cost-of-living-calculator', 'calculator'),
            res('3-7', 'Finding Alumni Networks on LinkedIn', 'https://www.linkedin.com/school/search/', 'tool'),
        ],
    },

    {
        id: 'node-3-l',
        title: 'Urban Campus Track',
        description: 'PLACEHOLDER — Branch for students who want city-based schools with internship and networking proximity.',
        status: 'upcoming',
        level: 3,
        position: 'left',
        icon: Globe,
        resources: [
            res('3l-1', 'Best Urban Colleges for Networking', 'https://www.timeshighereducation.com/student/best-universities/best-universities-us-cities', 'guide'),
            res('3l-2', 'Internship Access in Major Cities', 'https://www.forbes.com/sites/carisommer/2018/06/27/the-benefits-of-interning-in-a-big-city/', 'article'),
            res('3l-3', 'Transit & Cost of Living in College Cities', 'https://www.bankrate.com/real-estate/cost-of-living-calculator/', 'calculator'),
            res('3l-4', 'Safety & Student Support in Urban Campuses', 'https://www.bestcolleges.com/blog/safety-on-campus-in-the-city/', 'article'),
            res('3l-5', 'NYC, Boston, Chicago, SF — College Ecosystems', 'https://en.wikipedia.org/wiki/List_of_colleges_and_universities_in_Boston', 'guide'),
            res('3l-6', 'Co-op Programs in Urban Universities', 'https://www.northeastern.edu/coop/', 'article'),
            res('3l-7', 'Part-Time Work & Campus Life Balance', 'https://www.hercampus.com/school/bu/pros-and-cons-living-urban-campus/', 'guide'),
        ],
    },

    {
        id: 'node-3-r',
        title: 'Rural / College Town Track',
        description: 'PLACEHOLDER — Branch for students drawn to tight-knit campus communities and residential college life.',
        status: 'upcoming',
        level: 3,
        position: 'right',
        icon: Heart,
        resources: [
            res('3r-1', 'Benefits of Residential College Experiences', 'https://www.insidehighered.com/views/2019/08/21/why-residential-colleges-matter-opinion', 'article'),
            res('3r-2', 'Tight-Knit Community & Mental Health', 'https://hbr.org/2019/10/the-value-of-a-tight-knit-community', 'guide'),
            res('3r-3', 'Research Access at Smaller Colleges', 'https://www.cur.org/what/about/undergraduate_research/', 'article'),
            res('3r-4', 'Campus Jobs & Work-Study at Small Schools', 'https://studentaid.gov/understand-aid/types/work-study', 'guide'),
            res('3r-5', 'Greek Life & Traditions at Residential Colleges', 'https://www.theatlantic.com/education/archive/2014/02/the-social-life-of-the-residential-college/283838/', 'article'),
            res('3r-6', 'Transportation & Getting Around Without a City', 'https://collegelifemadeeasy.com/cars-in-college/', 'guide'),
            res('3r-7', 'Top Residential College Experiences Ranked', 'https://www.princetonreview.com/college-rankings?rankings=best-quality-of-life', 'article'),
        ],
    },

    // ════════════════════════════════════════
    // PHASE 3 — TESTING (Levels 4–5)
    // ════════════════════════════════════════

    {
        id: 'node-4',
        title: 'Test Strategy',
        description: 'PLACEHOLDER — Decide between SAT and ACT, set score targets, and plan test dates for senior year.',
        status: 'upcoming',
        level: 4,
        position: 'center',
        icon: BarChart,
        resources: [
            res('4-1', 'SAT vs ACT: Which Is Right for You?', 'https://www.princetonreview.com/college/sat-act', 'guide'),
            res('4-2', 'Test-Optional Policy Tracker 2025', 'https://www.fairtest.org/university/optional', 'tool'),
            res('4-3', 'How Colleges Superscore', 'https://www.collegeboard.org/sat/scores/sending-scores/superscore', 'article'),
            res('4-4', 'Senior Year Test Date Calendar', 'https://www.act.org/content/act/en/products-and-services/the-act/registration.html', 'official'),
            res('4-5', 'Score Targets by School Tier', 'https://www.prepscholar.com/sat/s/colleges/Harvard-SAT-scores', 'calculator'),
            res('4-6', 'How Much Do Test Scores Actually Matter?', 'https://www.nytimes.com/2024/02/05/briefing/sat-act-test-scores.html', 'article'),
            res('4-7', 'When to Stop Testing: Diminishing Returns', 'https://www.supertutortv.com/sat/when-should-you-stop-taking-the-sat-act/', 'guide'),
        ],
    },

    {
        id: 'node-4-l',
        title: 'SAT Deep Dive',
        description: 'PLACEHOLDER — Branch for SAT-focused students. Study plans, official prep, and score improvement strategies.',
        status: 'upcoming',
        level: 4,
        position: 'left',
        icon: BookOpen,
        track: 'testing-sat',
        resources: [
            res('4l-1', 'Khan Academy Official SAT Prep (Free)', 'https://www.khanacademy.org/test-prep/sat', 'tool'),
            res('4l-2', 'College Board SAT Full Practice Tests', 'https://satsuite.collegeboard.org/digital/prep-practice/full-length-practice-tests', 'official'),
            res('4l-3', 'Digital SAT Format Changes Explained', 'https://www.youtube.com/watch?v=N_8NfA7-C3M', 'article'),
            res('4l-4', 'SAT Math Section Strategy Guide', 'https://www.prepscholar.com/sat/s/math', 'guide'),
            res('4l-5', 'SAT Reading & Writing Breakdown', 'https://satsuite.collegeboard.org/sat/whats-on-the-test/reading-writing', 'guide'),
            res('4l-6', 'From 1200 to 1400: Real Student Plans', 'https://www.reddit.com/r/Sat/comments/989v4y/how_to_get_a_1500_on_the_sat/', 'article'),
            res('4l-7', 'Bluebook App — Official Digital SAT Tool', 'https://bluebook.collegeboard.org/', 'tool'),
        ],
    },

    {
        id: 'node-4-r',
        title: 'ACT Deep Dive',
        description: 'PLACEHOLDER — Branch for ACT-focused students. Study plans, timing strategies, and science section prep.',
        status: 'upcoming',
        level: 4,
        position: 'right',
        icon: BookOpen,
        track: 'testing-act',
        resources: [
            res('4r-1', 'Official ACT Prep Guide & Practice Tests', 'https://www.act.org/content/act/en/products-and-services/the-act/test-preparation.html', 'official'),
            res('4r-2', 'ACT Science Section: What It Actually Tests', 'https://www.youtube.com/watch?v=vV_oX6mN9eY', 'guide'),
            res('4r-3', 'ACT Timing Strategies That Work', 'https://www.magoosh.com/act/act-time-management-strategies/', 'guide'),
            res('4r-4', 'ACT Math vs SAT Math Differences', 'https://www.princetonreview.com/college-advice/sat-act-math', 'article'),
            res('4r-5', 'Free ACT Prep Resources Ranked', 'https://www.prepscholar.com/act/s/resources/best-free-act-prep', 'tool'),
            res('4r-6', 'Raising Your ACT Composite by 3+ Points', 'https://www.supertutortv.com/act/how-to-get-a-36-on-the-act/', 'article'),
            res('4r-7', 'ACT vs SAT Score Concordance Table', 'https://www.act.org/content/act/en/products-and-services/the-act/scores/act-sat-concordance.html', 'tool'),
        ],
    },

    {
        id: 'node-5',
        title: 'Test-Optional Decision',
        description: 'PLACEHOLDER — Evaluate whether to submit test scores for each school on your list given your score range.',
        status: 'upcoming',
        level: 5,
        position: 'center',
        icon: CheckSquare,
        resources: [
            res('5-1', 'How to Decide Whether to Submit Test Scores', 'https://www.collegeessayguy.com/blog/test-optional-admissions', 'guide'),
            res('5-2', 'Test-Optional vs Test-Blind Difference', 'https://www.usnews.com/education/best-colleges/articles/test-blind-test-optional-what-is-the-difference', 'article'),
            res('5-3', 'How Admissions Officers Use Submitted Scores', 'https://admissions.dartmouth.edu/apply/standardized-testing-policy-faq', 'article'),
            res('5-4', 'Score Range Benchmarks by School', 'https://www.compassprep.com/college-profiles/', 'tool'),
            res('5-5', 'International Students & Test Requirements', 'https://www.usnews.com/education/best-colleges/articles/how-international-students-should-view-test-optional-policies', 'guide'),
            res('5-6', 'Community College Transfer & Testing Rules', 'https://www.khanacademy.org/college-admissions/applying-to-college/transfer-students/a/transfer-testing', 'guide'),
            res('5-7', 'Making the Final Call: Checklist', 'https://recap.com/blog/test-optional-submission-guide', 'guide'),
        ],
    },

    // ════════════════════════════════════════
    // PHASE 4 — ACADEMICS & COURSEWORK (Level 6)
    // ════════════════════════════════════════

    {
        id: 'node-6',
        title: 'Senior Course Load',
        description: 'PLACEHOLDER — Finalize senior year courses. Colleges expect a rigorous senior schedule — avoid senioritis traps.',
        status: 'upcoming',
        level: 6,
        position: 'center',
        icon: GraduationCap,
        resources: [
            res('6-1', 'Why Senior Year Grades Matter More Than You Think', 'https://bigfuture.collegeboard.org/plan-for-college/college-prep/pre-college-calendar/why-senior-year-grades-matter', 'article'),
            res('6-2', 'How to Choose AP vs Dual Enrollment', 'https://www.usnews.com/education/best-colleges/articles/ap-vs-dual-enrollment-what-to-know', 'guide'),
            res('6-3', 'What "Most Rigorous Curriculum" Means to Admissions', 'https://admission.gatech.edu/rigor/', 'article'),
            res('6-4', 'Recovering From a Weak Junior Year', 'https://www.collegeessayguy.com/blog/how-to-explain-bad-grades-college-application', 'guide'),
            res('6-5', 'IB Diploma in Senior Year — Pros & Cons', 'https://www.ibo.org/university-admission/recognition-of-the-ib-diploma-by-countries-and-universities/', 'article'),
            res('6-6', 'Communicating Course Changes to Colleges', 'https://commonapp.org/help/dropping-a-class', 'official'),
            res('6-7', 'Grade Trends: Why Upward Trajectories Help', 'https://veritasprep.com/blog/the-importance-of-grade-trends-in-college-admissions/', 'article'),
        ],
    },

    {
        id: 'node-6-l',
        title: 'AP / IB Strategy',
        description: 'PLACEHOLDER — Branch for students maximizing AP or IB course counts for selective admissions.',
        status: 'upcoming',
        level: 6,
        position: 'left',
        icon: Star,
        resources: [
            res('6l-1', 'AP Exam Score Cutoffs for College Credit', 'https://apstudents.collegeboard.org/getting-credit-placement/search-policies', 'guide'),
            res('6l-2', 'Which APs Matter Most for Your Major', 'https://blog.prepscholar.com/which-ap-classes-should-you-take', 'article'),
            res('6l-3', 'IB vs AP: What Colleges Prefer', 'https://www.princetonreview.com/college-advice/ib-vs-ap', 'article'),
            res('6l-4', 'Balancing Multiple APs Without Burning Out', 'https://petersons.com/blog/ap-classes-burnout/', 'guide'),
            res('6l-5', 'Free AP Prep — Khan Academy Courses', 'https://www.khanacademy.org/about/blog/post/191316075191/khan-academy-is-now-the-official-practice-partner', 'tool'),
            res('6l-6', 'AP Score Sending Strategy', 'https://apstudents.collegeboard.org/score-reporting-services/sending-scores', 'guide'),
            res('6l-7', 'Dual Enrollment as an AP Alternative', 'https://www.forbes.com/advisor/education/dual-enrollment-pros-and-cons/', 'article'),
        ],
    },

    {
        id: 'node-6-r',
        title: 'GPA Recovery Plan',
        description: 'PLACEHOLDER — Branch for students with a dip in junior year who need to show an upward trend senior year.',
        status: 'upcoming',
        level: 6,
        position: 'right',
        icon: TrendingUp,
        resources: [
            res('6r-1', 'Addressing a Low GPA in Your Application', 'https://www.collegeessayguy.com/blog/how-to-explain-bad-grades-college-application', 'guide'),
            res('6r-2', 'How Upward Grade Trends Are Evaluated', 'https://www.youtube.com/watch?v=yW6aK0mAnp4', 'article'),
            res('6r-3', 'Writing an Additional Info Section Explanation', 'https://www.commonapp.org/blog/how-to-use-the-additional-information-section', 'guide'),
            res('6r-4', 'Schools That Are More GPA-Flexible', 'https://www.prepscholar.com/sat/s/colleges/colleges-with-low-GPA-requirements', 'article'),
            res('6r-5', 'Study Habits Reset for Senior Year', 'https://www.goconqr.com/en/examtime/blog/study-hacks/', 'guide'),
            res('6r-6', 'Counselor Letter & Context Letters Strategy', 'https://www.khanacademy.org/college-admissions/applying-to-college/letters-of-recommendation/a/counselor-recommendations', 'guide'),
            res('6r-7', 'Community College Dual Enrollment as a Signal', 'https://www.usnews.com/education/best-colleges/articles/how-to-decide-if-dual-enrollment-is-right-for-you', 'article'),
        ],
    },

    // ════════════════════════════════════════
    // PHASE 5 — EXTRACURRICULARS (Levels 7–8)
    // ════════════════════════════════════════

    {
        id: 'node-7',
        title: 'EC Audit & Narrative',
        description: 'PLACEHOLDER — Review all extracurriculars and shape them into a coherent narrative that shows depth and leadership.',
        status: 'upcoming',
        level: 7,
        position: 'center',
        icon: Compass,
        resources: [
            res('7-1', 'How to List Extracurriculars on CommonApp', 'https://www.commonapp.org/blog/how-to-fill-out-the-activities-section', 'guide'),
            res('7-2', 'Quality vs Quantity in ECs', 'https://hscollegebound.com/extracurriculars-quality-vs-quantity/', 'article'),
            res('7-3', 'Building a Spike vs Well-Rounded Profile', 'https://www.prepscholar.com/sat/s/colleges/well-rounded-vs-spike-college-admissions', 'article'),
            res('7-4', 'How Admissions Officers Read Activity Lists', 'https://www.collegeessayguy.com/blog/common-app-activities-section-guide', 'article'),
            res('7-5', 'Turning Informal Activities Into Resume Items', 'https://www.commonapp.org/blog/what-counts-as-an-extracurricular-activity', 'guide'),
            res('7-6', 'The 150-Character Activity Description Formula', 'https://www.collegeessayguy.com/blog/guide-to-extracurricular-activities-list-common-app', 'guide'),
            res('7-7', 'What Leadership Means to Colleges', 'https://bigfuture.collegeboard.org/plan-for-college/college-prep/extracurriculars/what-colleges-want-to-see-in-your-extracurriculars', 'article'),
        ],
    },

    {
        id: 'node-7-l',
        title: 'Research & Science ECs',
        description: 'PLACEHOLDER — Branch for students with lab, research, or science competition experience.',
        status: 'upcoming',
        level: 7,
        position: 'left',
        icon: Microscope,
        track: 'stem',
        resources: [
            res('7l-1', 'How to Get a Research Position as a HS Student', 'https://www.collegeessayguy.com/blog/how-to-get-a-research-internship', 'guide'),
            res('7l-2', 'Science Fairs That Matter (ISEF, Regeneron)', 'https://www.societyforscience.org/isef/', 'article'),
            res('7l-3', 'Writing About Research in Your Application', 'https://admissions.mit.edu/blog/entry/how-to-write-about-research-in-your-mit-application/', 'guide'),
            res('7l-4', 'Cold Emailing Professors for Lab Opportunities', 'https://petersons.com/blog/how-to-cold-email-professors-for-research-opportunities/', 'guide'),
            res('7l-5', 'Online Research Programs for HS Students', 'https://www.polygence.org/blog/guide-to-high-school-research-programs', 'tool'),
            res('7l-6', 'RSI, PRIMES, and Other Elite Programs', 'https://blog.prepscholar.com/the-11-most-prestigious-summer-science-programs-for-high-school-students', 'article'),
            res('7l-7', 'How Research ECs Impact STEM Admissions', 'https://veritasprep.com/blog/the-value-of-undergraduate-research-for-college-applications/', 'article'),
        ],
    },

    {
        id: 'node-7-r',
        title: 'Arts & Creative ECs',
        description: 'PLACEHOLDER — Branch for students with performing arts, visual arts, or creative writing portfolios.',
        status: 'upcoming',
        level: 7,
        position: 'right',
        icon: Palette,
        track: 'arts',
        resources: [
            res('7r-1', 'Submitting an Arts Supplement — Full Guide', 'https://www.commonapp.org/blog/submitting-an-art-supplement', 'guide'),
            res('7r-2', 'When to Apply to Art-Focused vs Regular Colleges', 'https://www.thebalancecareers.com/bfa-vs-ba-degree-pros-and-cons-1289111', 'article'),
            res('7r-3', 'Building a Visual Arts Portfolio for College', 'https://www.artsbridge.com/visual-arts-portfolio-tips/', 'guide'),
            res('7r-4', 'Performing Arts Audition Process Explained', 'https://www.musicadmissionscentral.com/audition-tips/', 'guide'),
            res('7r-5', 'Creative Writing Portfolios in College Apps', 'https://www.collegeessayguy.com/blog/creative-writing-supplement', 'guide'),
            res('7r-6', 'Music Supplement & Recording Tips', 'https://yale-college.yale.edu/admissions/apply/supplementary-materials', 'guide'),
            res('7r-7', 'How Arts Talent Affects Admissions Odds', 'https://veritasprep.com/blog/how-to-use-arts-supplements-to-boost-your-application/', 'article'),
        ],
    },

    {
        id: 'node-8',
        title: 'Leadership & Impact',
        description: 'PLACEHOLDER — Identify and articulate your most meaningful leadership moments and community impact.',
        status: 'upcoming',
        level: 8,
        position: 'center',
        icon: Flag,
        resources: [
            res('8-1', 'Defining Leadership for College Applications', 'https://www.collegeessayguy.com/blog/leadership-examples-college-applications', 'guide'),
            res('8-2', 'Informal Leadership vs Formal Titles', 'https://www.commonapp.org/blog/leadership-is-not-just-about-titles', 'article'),
            res('8-3', 'Community Impact Projects That Stand Out', 'https://www.forbes.com/sites/christopherrim/2023/07/20/how-to-make-a-community-impact-as-a-high-schooler/', 'guide'),
            res('8-4', 'How to Start a Club or Initiative Senior Year', 'https://www.wikihow.com/Start-a-Club-in-High-School', 'guide'),
            res('8-5', 'Service Hours vs Meaningful Volunteering', 'https://www.khanacademy.org/college-admissions/applying-to-college/extracurricular-activities/a/the-difference-between-community-service-and-volunteer-work', 'article'),
            res('8-6', 'Pitching Your Impact Story Across App Sections', 'https://veritasprep.com/blog/how-to-tell-your-story-in-the-college-application/', 'guide'),
            res('8-7', 'Social Entrepreneurship for High Schoolers', 'https://www.ashoka.org/en-us/program/ashoka-young-changemakers', 'article'),
        ],
    },

    {
        id: 'node-8-l',
        title: 'Tech & Coding ECs',
        description: 'PLACEHOLDER — Branch for students with coding projects, hackathons, or open-source contributions.',
        status: 'upcoming',
        level: 8,
        position: 'left',
        icon: Code,
        track: 'stem',
        resources: [
            res('8l-1', 'GitHub Portfolio for College Applicants', 'https://github.com/explore', 'tool'),
            res('8l-2', 'Hackathon Competitions for HS Students', 'https://mlh.io/seasons/2024/events', 'guide'),
            res('8l-3', 'App Development as a College EC', 'https://www.usnews.com/education/blogs/college-admissions-playbook/articles/2018-09-17/how-students-can-showcase-tech-skills-to-college-admissions', 'article'),
            res('8l-4', 'Open Source Contributions on Your App', 'https://opensource.guide/how-to-contribute/', 'guide'),
            res('8l-5', 'Competitive Programming (USACO) Overview', 'http://www.usaco.org/', 'article'),
            res('8l-6', 'Coding Bootcamps & Summer Programs', 'https://www.coursereport.com/best-coding-bootcamps', 'tool'),
            res('8l-7', 'How CS Admissions Reads Your Projects', 'https://www.cs.cmu.edu/undergraduate-admissions', 'article'),
        ],
    },

    {
        id: 'node-8-r',
        title: 'Advocacy & Social Impact',
        description: 'PLACEHOLDER — Branch for students driven by social justice, civic engagement, or nonprofit work.',
        status: 'upcoming',
        level: 8,
        position: 'right',
        icon: Heart,
        track: 'humanities',
        resources: [
            res('8r-1', 'Civic Engagement Activities That Impress Colleges', 'https://mcc.gse.harvard.edu/reports/turning-the-tide-college-admissions-character-community-service', 'guide'),
            res('8r-2', 'Starting a Nonprofit or 501c3 in High School', 'https://www.councilofnonprofits.org/how-start-nonprofit', 'article'),
            res('8r-3', 'Political Campaigns & Civic Internships', 'https://www.usa.gov/join-political-campaign', 'guide'),
            res('8r-4', 'Advocacy Writing — Op-Eds & Publications', 'https://www.theopedproject.org/resources', 'guide'),
            res('8r-5', 'Model UN and Its Real Value in Admissions', 'https://bestdelegate.com/how-model-un-helps-your-college-applications/', 'article'),
            res('8r-6', 'Youth Councils & Local Government Experience', 'https://www.ncl.org/youth-advisory-councils/', 'article'),
            res('8r-7', 'Turning Passion Into Policy — Student Stories', 'https://mcc.gse.harvard.edu/character-education-resources/social-impact-leadership', 'article'),
        ],
    },

    // ════════════════════════════════════════
    // PHASE 6 — ESSAYS (Levels 9–11)
    // ════════════════════════════════════════

    {
        id: 'node-9',
        title: 'CommonApp Personal Statement',
        description: 'PLACEHOLDER — Brainstorm, draft, and refine the 650-word personal statement — the heart of your application.',
        status: 'upcoming',
        level: 9,
        position: 'center',
        icon: PenTool,
        resources: [
            res('9-1', 'The 7 CommonApp Essay Prompts Broken Down', 'https://www.commonapp.org/blog/2024-2025-common-app-essay-prompts', 'guide'),
            res('9-2', 'How to Choose Your Essay Topic', 'https://www.collegeessayguy.com/blog/how-to-write-a-college-essay', 'guide'),
            res('9-3', "Show Don't Tell: Essay Writing Principles", 'https://www.khanacademy.org/college-admissions/applying-to-college/admissions-essays/a/writing-your-essay-show-dont-tell', 'article'),
            res('9-4', 'Essays That Worked — Real Examples', 'https://apply.jhu.edu/application-process/essays-that-worked/', 'article'),
            res('9-5', 'The "So What?" Test for Your Essay', 'https://www.collegeessayguy.com/blog/the-so-what-test', 'guide'),
            res('9-6', 'Avoiding the Most Common Essay Mistakes', 'https://www.forbes.com/sites/christopherrim/2023/07/26/the-most-common-college-essay-mistakes-to-avoid/', 'article'),
            res('9-7', 'Revision Checklist for Your Personal Statement', 'https://www.collegeessayguy.com/blog/college-essay-checklist', 'tool'),
        ],
    },

    {
        id: 'node-9-l',
        title: 'Identity & Background Essays',
        description: 'PLACEHOLDER — Branch for students writing about cultural identity, immigrant experience, or first-gen background.',
        status: 'upcoming',
        level: 9,
        position: 'left',
        icon: User,
        resources: [
            res('9l-1', 'Writing About Your Culture Without Stereotyping', 'https://www.collegeessayguy.com/blog/how-to-write-the-diversity-essay', 'guide'),
            res('9l-2', 'First-Gen College Student Essay Strategies', 'https://imfirst.org/resources/stories/', 'guide'),
            res('9l-3', 'Immigrant Experience Essays That Stand Out', 'https://www.npr.org/sections/ed/2016/09/23/495144723/what-immigrant-students-have-to-teach-college-admissions-officers', 'article'),
            res('9l-4', 'Balancing Vulnerability and Strength in Essays', 'https://veritasprep.com/blog/writing-about-personal-struggles/', 'guide'),
            res('9l-5', 'Multilingual Identity in College Essays', 'https://www.nytimes.com/2021/12/03/us/college-essays-identity.html', 'article'),
            res('9l-6', 'QuestBridge & First-Gen Specific Resources', 'https://www.questbridge.org/', 'official'),
            res('9l-7', 'How Diversity Statements Are Read', 'https://admission.ucla.edu/apply/personal-insight-questions', 'article'),
        ],
    },

    {
        id: 'node-9-r',
        title: 'Overcoming Adversity Essays',
        description: 'PLACEHOLDER — Branch for students whose story involves hardship, challenge, or significant personal obstacles.',
        status: 'upcoming',
        level: 9,
        position: 'right',
        icon: TrendingUp,
        resources: [
            res('9r-1', 'Writing About Hardship Without Being a Victim', 'https://www.collegeessayguy.com/blog/the-adversity-essay', 'guide'),
            res('9r-2', 'Trauma-Informed Essay Writing Tips', 'https://mcc.gse.harvard.edu/character-education-resources/essay-writing-trauma', 'guide'),
            res('9r-3', 'Mental Health in College Essays — Yes or No?', 'https://www.nytimes.com/2022/01/24/us/college-admissions-essays-mental-health.html', 'article'),
            res('9r-4', 'Framing Challenge as Growth', 'https://www.khanacademy.org/college-admissions/applying-to-college/admissions-essays/v/writing-about-adversity', 'guide'),
            res('9r-5', 'Family Hardship Essays Done Right', 'https://www.collegeessayguy.com/blog/how-to-write-the-challenges-essay', 'article'),
            res('9r-6', 'Adversity vs Obstacle: Knowing the Difference', 'https://petersons.com/blog/how-to-write-a-strong-essay-about-overcoming-adversity/', 'article'),
            res('9r-7', 'Additional Info Section for Context', 'https://www.commonapp.org/blog/how-to-use-the-additional-information-section', 'guide'),
        ],
    },

    {
        id: 'node-10',
        title: 'Supplement Essays',
        description: 'PLACEHOLDER — Research and write supplemental essays for each school: "Why Us", "Why Major", and short takes.',
        status: 'upcoming',
        level: 10,
        position: 'center',
        icon: FileText,
        resources: [
            res('10-1', '"Why This College" Essay Full Guide', 'https://www.collegeessayguy.com/blog/why-this-college-essay', 'guide'),
            res('10-2', '"Why This Major" Essay Strategy', 'https://www.collegeessayguy.com/blog/why-this-major-essay', 'guide'),
            res('10-3', 'Short Answer Questions — How to Be Concise', 'https://www.prepscholar.com/sat/s/colleges/common-app-short-answers', 'guide'),
            res('10-4', 'Researching Schools for Specific Supplement Details', 'https://www.youtube.com/watch?v=F0pA0K5D5mU', 'tool'),
            res('10-5', 'Activity Essay & Intellectual Interest Prompts', 'https://www.collegeessayguy.com/blog/extracurricular-activity-essay-examples', 'guide'),
            res('10-6', 'Repurposing Essays Across Schools Ethically', 'https://www.collegeessayguy.com/blog/how-to-recycle-college-essays', 'article'),
            res('10-7', 'Essay Tracker Spreadsheet Template', 'https://www.collegeessayguy.com/blog/college-application-tracker', 'tool'),
        ],
    },

    {
        id: 'node-10-l',
        title: 'Ivy & T20 Supplements',
        description: 'PLACEHOLDER — Branch for students applying to highly selective schools with unique multi-essay requirements.',
        status: 'upcoming',
        level: 10,
        position: 'left',
        icon: Star,
        resources: [
            res('10l-1', 'Harvard Supplement Essays Breakdown', 'https://www.collegeessayguy.com/blog/harvard-university-supplemental-essays', 'guide'),
            res('10l-2', 'MIT Application Essays What They\'re Looking For', 'https://admissions.mit.edu/apply/freshman/essays/', 'guide'),
            res('10l-3', 'Stanford Essays: Roommate Letter & Short Takes', 'https://www.collegeessayguy.com/blog/stanford-supplemental-essay', 'guide'),
            res('10l-4', 'UChicago Uncommon Essay Strategy', 'https://collegeadmissions.uchicago.edu/apply/essays', 'guide'),
            res('10l-5', 'Columbia List Essays — Showing Genuine Interest', 'https://undergrad.admissions.columbia.edu/apply/process/columbia-questions', 'guide'),
            res('10l-6', 'How T20 Schools Use Supplements to Differentiate', 'https://veritasprep.com/blog/why-supplemental-essays-matter/', 'article'),
            res('10l-7', 'Getting Feedback on High-Stakes Essays', 'https://www.collegeessayguy.com/blog/who-should-review-your-college-essay', 'guide'),
        ],
    },

    {
        id: 'node-10-r',
        title: 'UC Application Essays',
        description: 'PLACEHOLDER — Branch for students applying to the University of California system (4 PIQs instead of CommonApp).',
        status: 'upcoming',
        level: 10,
        position: 'right',
        icon: BookOpen,
        resources: [
            res('10r-1', 'UC Personal Insight Questions (PIQs) Full Guide', 'https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-freshman/personal-insight-questions.html', 'official'),
            res('10r-2', 'Choosing Which 4 PIQs to Answer', 'https://www.collegeessayguy.com/blog/uc-personal-insight-questions-guide', 'guide'),
            res('10r-3', 'How the UC System Reads Applications', 'https://admission.universityofcalifornia.edu/how-to-apply/applying-as-a-freshman/how-applications-are-reviewed.html', 'article'),
            res('10r-4', 'UC GPA Calculation — Weighted vs Capped', 'https://admission.universityofcalifornia.edu/counselors/preparing-freshman-students/gpa-requirement.html', 'calculator'),
            res('10r-5', 'UC vs CommonApp: Managing Both', 'https://www.collegeessayguy.com/blog/uc-piqs-vs-common-app-personal-statement', 'guide'),
            res('10r-6', 'UC Campus Differences Explained', 'https://www.usnews.com/education/best-colleges/articles/uc-schools-rankings-admissions-cost-and-more', 'guide'),
            res('10r-7', 'PIQ Examples That Worked', 'https://www.collegeessayguy.com/blog/uc-personal-insight-questions-examples', 'article'),
        ],
    },

    {
        id: 'node-11',
        title: 'Letters of Recommendation',
        description: 'PLACEHOLDER — Identify, approach, and brief recommenders. Provide them a brag sheet and timeline.',
        status: 'upcoming',
        level: 11,
        position: 'center',
        icon: Mail,
        resources: [
            res('11-1', 'How to Choose Your Recommenders', 'https://www.commonapp.org/blog/how-to-ask-for-letters-of-recommendation', 'guide'),
            res('11-2', 'Asking for a Rec Letter — Email Templates', 'https://www.collegeessayguy.com/blog/how-to-ask-for-a-letter-of-recommendation', 'guide'),
            res('11-3', 'Writing Your Own Brag Sheet', 'https://www.collegeessayguy.com/blog/brag-sheet-high-school-students', 'tool'),
            res('11-4', 'What Makes a Strong Recommendation Letter', 'https://admission.mit.edu/apply/freshman/recommendations/', 'article'),
            res('11-5', 'Counselor Rec vs Teacher Rec Differences', 'https://www.khanacademy.org/college-admissions/applying-to-college/letters-of-recommendation/a/teacher-recommendations', 'guide'),
            res('11-6', 'Optional Third Rec — When to Use It', 'https://www.prepscholar.com/sat/s/colleges/optional-letters-of-recommendation-college', 'article'),
            res('11-7', 'Rec Letter Deadlines & Tracker Template', 'https://recap.com/blog/recommendation-letter-tracker', 'tool'),
        ],
    },

    {
        id: 'node-11-l',
        title: 'Research Mentor Rec',
        description: 'PLACEHOLDER — Branch for STEM students getting a rec from a professor, lab mentor, or research supervisor.',
        status: 'upcoming',
        level: 11,
        position: 'left',
        icon: Microscope,
        track: 'stem',
        resources: [
            res('11l-1', 'How Research Mentor Letters Are Viewed', 'https://veritasprep.com/blog/the-power-of-research-mentor-recommendations/', 'article'),
            res('11l-2', 'Briefing Your Mentor on Your College Goals', 'https://petersons.com/blog/how-to-ask-a-professor-for-a-letter-of-recommendation/', 'guide'),
            res('11l-3', 'When a Professor Rec Hurts vs Helps', 'https://blog.prepscholar.com/how-to-get-a-great-recommendation-letter-from-a-professor', 'article'),
            res('11l-4', 'Research Summary to Give Your Recommender', 'https://www.cur.org/what/about/undergraduate_research/', 'tool'),
            res('11l-5', 'Following Up Professionally With Mentors', 'https://hbr.org/2023/04/how-to-thank-your-recommenders', 'guide'),
            res('11l-6', 'How to Waive Your Right to See the Letter', 'https://www.commonapp.org/help/waiving-your-ferpa-rights', 'official'),
            res('11l-7', 'Getting a Rec From an Online Program Instructor', 'https://www.polygence.org/blog/how-to-ask-your-mentor-for-a-recommendation-letter', 'guide'),
        ],
    },

    {
        id: 'node-11-r',
        title: 'Arts Portfolio Submission',
        description: 'PLACEHOLDER — Branch for arts students submitting a portfolio or arts supplement alongside applications.',
        status: 'upcoming',
        level: 11,
        position: 'right',
        icon: Palette,
        resources: [
            res('11r-1', 'Slideroom Portfolio Submission Guide', 'https://support.slideroom.com/article/76-how-to-submit-your-application', 'tool'),
            res('11r-2', 'What to Include in a Visual Arts Portfolio', 'https://www.artsbridge.com/visual-arts-portfolio-tips/', 'guide'),
            res('11r-3', 'Writing Your Artist Statement', 'https://www.collegeessayguy.com/blog/artist-statement-examples', 'guide'),
            res('11r-4', 'Music Recording Submission Standards', 'https://www.musicadmissionscentral.com/recording-tips/', 'guide'),
            res('11r-5', 'Theatre & Dance Audition Prep', 'https://www.artsbridge.com/acting-audition-tips/', 'guide'),
            res('11r-6', 'Creative Writing Portfolio Selection', 'https://www.collegeessayguy.com/blog/creative-writing-supplement', 'guide'),
            res('11r-7', 'Getting Your Portfolio Reviewed Before Submission', 'https://www.artsbridge.com/portfolio-reviews/', 'article'),
        ],
    },

    // ════════════════════════════════════════
    // PHASE 7 — APPLICATIONS (Levels 12–13)
    // ════════════════════════════════════════

    {
        id: 'node-12',
        title: 'Application Strategy',
        description: 'PLACEHOLDER — Set deadlines, decide on ED/EA/RD for each school, and finalize your application calendar.',
        status: 'upcoming',
        level: 12,
        position: 'center',
        icon: Calendar,
        resources: [
            res('12-1', 'ED vs EA vs RD vs REA — Full Explainer', 'https://www.collegeessayguy.com/blog/early-decision-vs-early-action', 'guide'),
            res('12-2', 'How to Pick Your ED School', 'https://www.forbes.com/sites/christopherrim/2023/09/20/how-to-choose-the-right-early-decision-school/', 'guide'),
            res('12-3', 'Application Deadline Calendar Template', 'https://www.collegeessayguy.com/blog/college-application-tracker', 'tool'),
            res('12-4', 'Rolling Admissions — Apply Early Strategy', 'https://www.usnews.com/education/best-colleges/articles/rolling-admissions-everything-you-need-to-know', 'article'),
            res('12-5', 'CommonApp Submission Checklist', 'https://www.commonapp.org/blog/college-application-checklist', 'official'),
            res('12-6', 'Coalition App vs CommonApp — Do You Need Both?', 'https://www.usnews.com/education/best-colleges/articles/common-app-vs-coalition-app-what-is-the-difference', 'guide'),
            res('12-7', 'How Demonstrated Interest Affects Admissions', 'https://www.collegedata.com/resources/the-facts-on-fit/demonstrated-interest', 'article'),
        ],
    },

    {
        id: 'node-12-l',
        title: 'Early Decision Strategy',
        description: 'PLACEHOLDER — Branch for students committing to an ED school. Understand the binding agreement and financial implications.',
        status: 'upcoming',
        level: 12,
        position: 'left',
        icon: Target,
        resources: [
            res('12l-1', 'Is ED Binding Even If Aid Is Insufficient?', 'https://www.nytimes.com/2021/11/18/your-money/early-decision-college-financial-aid.html', 'guide'),
            res('12l-2', 'ED Acceptance Rate Boost — Real Data', 'https://www.compassprep.com/early-decision-stats/', 'article'),
            res('12l-3', 'How to Back Out of ED If Needed', 'https://www.usnews.com/education/best-colleges/articles/can-you-back-out-of-early-decision', 'official'),
            res('12l-4', 'ED II Schools and Timing', 'https://www.collegeessayguy.com/blog/early-decision-2', 'guide'),
            res('12l-5', 'Financial Aid Implications of ED', 'https://myintuition.org/', 'calculator'),
            res('12l-6', 'Telling Your Counselor About Your ED Choice', 'https://commonapp.org/help/early-decision-agreement', 'guide'),
            res('12l-7', 'ED Decision Day Prep', 'https://www.youtube.com/watch?v=kY61A4-KxGk', 'article'),
        ],
    },

    {
        id: 'node-12-r',
        title: 'Regular Decision Planning',
        description: 'PLACEHOLDER — Branch for students going RD-heavy. Maximize January apps and manage submission fatigue.',
        status: 'upcoming',
        level: 12,
        position: 'right',
        icon: ClipboardList,
        resources: [
            res('12r-1', 'Managing 10+ Applications Without Burning Out', 'https://www.collegeessayguy.com/blog/how-to-apply-to-college', 'guide'),
            res('12r-2', 'January 1 Deadline Survival Plan', 'https://veritasprep.com/blog/regular-decision-deadline-survival-guide/', 'guide'),
            res('12r-3', 'Prioritizing Schools in Your RD Pool', 'https://www.prepscholar.com/sat/s/colleges/regular-decision-deadlines', 'article'),
            res('12r-4', 'Waitlist Strategy From the Start', 'https://www.collegedata.com/resources/the-facts-on-fit/the-college-waitlist', 'guide'),
            res('12r-5', 'How to Write Multiple "Why Us" Essays Fast', 'https://www.collegeessayguy.com/blog/why-this-college-essay', 'guide'),
            res('12r-6', 'Tracking Application Portals & Checklist Items', 'https://recap.com/blog/application-portal-management', 'tool'),
            res('12r-7', 'RD Acceptance Rates vs ED — What to Expect', 'https://www.compassprep.com/early-decision-stats/', 'article'),
        ],
    },

    {
        id: 'node-13',
        title: 'Submit & Follow Up',
        description: 'PLACEHOLDER — Submit applications, confirm receipt, and manage portal logins and missing document requests.',
        status: 'upcoming',
        level: 13,
        position: 'center',
        icon: CheckSquare,
        resources: [
            res('13-1', 'Post-Submission Checklist for Every School', 'https://www.commonapp.org/blog/submitted-now-what', 'guide'),
            res('13-2', 'Setting Up Application Portals', 'https://www.prepscholar.com/sat/s/colleges/check-college-application-status', 'tool'),
            res('13-3', 'What to Do If a Document Is Missing', 'https://commonapp.org/help/missing-documents', 'guide'),
            res('13-4', 'Sending Mid-Year Reports & Senior Grades', 'https://www.commonapp.org/blog/midyear-and-final-reports', 'official'),
            res('13-5', 'Writing an Admissions Update Letter', 'https://www.collegeessayguy.com/blog/how-to-write-a-letter-of-continued-interest', 'guide'),
            res('13-6', 'Demonstrated Interest After Submission', 'https://www.collegedata.com/resources/the-facts-on-fit/demonstrated-interest', 'article'),
            res('13-7', 'Responding to Interviews & Info Sessions', 'https://www.collegeessayguy.com/blog/college-interview-questions', 'guide'),
        ],
    },

    // ════════════════════════════════════════
    // PHASE 8 — FINANCIAL AID (Level 14)
    // ════════════════════════════════════════

    {
        id: 'node-14',
        title: 'FAFSA & CSS Profile',
        description: 'PLACEHOLDER — Complete the FAFSA and CSS Profile on time. Understand EFC, need-based aid, and merit aid.',
        status: 'upcoming',
        level: 14,
        position: 'center',
        icon: DollarSign,
        resources: [
            res('14-1', 'FAFSA Step-by-Step Completion Guide', 'https://studentaid.gov/apply-for-aid/fafsa/filling-out', 'official'),
            res('14-2', 'CSS Profile — Who Needs It & How to File', 'https://cssprofile.collegeboard.org/', 'official'),
            res('14-3', 'EFC / SAI Calculator', 'https://studentaid.gov/aid-estimator/', 'calculator'),
            res('14-4', 'FAFSA Opening Dates & Priority Deadlines', 'https://studentaid.gov/apply-for-aid/fafsa/fafsa-deadlines', 'official'),
            res('14-5', 'Dependency Status — Are You Independent?', 'https://studentaid.gov/apply-for-aid/fafsa/filling-out/dependency', 'guide'),
            res('14-6', 'How Financial Aid Packages Are Built', 'https://www.khanacademy.org/college-admissions/paying-for-college/financial-aid-basics/a/financial-aid-awards', 'article'),
            res('14-7', 'Appealing a Financial Aid Award', 'https://www.collegeessayguy.com/blog/financial-aid-appeal-letter', 'guide'),
        ],
    },

    {
        id: 'node-14-l',
        title: 'Scholarships',
        description: 'PLACEHOLDER — Branch for identifying and applying to external scholarships separate from school-based aid.',
        status: 'upcoming',
        level: 14,
        position: 'left',
        icon: Award,
        track: 'financial',
        resources: [
            res('14l-1', 'Scholarship Search Engines Ranked', 'https://www.usnews.com/education/best-colleges/paying-for-college/articles/the-best-scholarship-websites', 'tool'),
            res('14l-2', 'Local vs National Scholarships — Which to Prioritize', 'https://www.unigo.com/scholarships/our-scholarships', 'guide'),
            res('14l-3', 'Common Scholarship Essay Prompts & How to Reuse', 'https://www.collegeessayguy.com/blog/scholarship-essay-examples', 'guide'),
            res('14l-4', 'QuestBridge National College Match', 'https://www.questbridge.org/', 'official'),
            res('14l-5', 'Gates Scholarship & Coca-Cola Scholars Overview', 'https://www.thegatesscholarship.org/', 'article'),
            res('14l-6', 'Scholarship Scam Red Flags', 'https://consumer.ftc.gov/articles/how-avoid-scholarship-and-financial-aid-scams', 'guide'),
            res('14l-7', 'Scholarship Tracker Spreadsheet Template', 'https://www.collegeessayguy.com/blog/scholarship-tracker', 'tool'),
        ],
    },

    {
        id: 'node-14-r',
        title: 'Net Price & Loans',
        description: 'PLACEHOLDER — Branch for understanding net price calculators, loan types, and realistic cost comparison.',
        status: 'upcoming',
        level: 14,
        position: 'right',
        icon: BarChart,
        track: 'financial',
        resources: [
            res('14r-1', 'Net Price Calculator — Every School Has One', 'https://collegecost.ed.gov/net-price', 'calculator'),
            res('14r-2', 'Federal vs Private Loans Explained', 'https://studentaid.gov/understand-aid/types/loans/federal-vs-private', 'guide'),
            res('14r-3', 'Work-Study Programs Demystified', 'https://studentaid.gov/understand-aid/types/work-study', 'official'),
            res('14r-4', 'Subsidized vs Unsubsidized Loans', 'https://studentaid.gov/understand-aid/types/loans/subsidized-unsubsidized', 'article'),
            res('14r-5', 'How to Compare Financial Aid Award Letters', 'https://www.consumerfinance.gov/consumer-tools/gradschool-calculator/', 'tool'),
            res('14r-6', 'ROI of College — Is the Cost Worth It?', 'https://freopp.org/is-college-worth-it-a-comprehensive-return-on-investment-analysis-1b2ad17f84c8', 'calculator'),
            res('14r-7', 'Income-Driven Repayment Plans Overview', 'https://studentaid.gov/manage-loans/repayment/plans/income-driven', 'guide'),
        ],
    },

    // ════════════════════════════════════════
    // PHASE 9 — DECISIONS (Levels 15–16)
    // ════════════════════════════════════════

    {
        id: 'node-15',
        title: 'Decision Day Prep',
        description: 'PLACEHOLDER — Compare acceptance letters, financial aid packages, and make a final school decision by May 1.',
        status: 'upcoming',
        level: 15,
        position: 'center',
        icon: Flag,
        resources: [
            res('15-1', 'How to Compare College Acceptance Letters', 'https://www.youtube.com/watch?v=RAn3iM9H-1c', 'guide'),
            res('15-2', 'Visiting Accepted Students Days (Revisit Programs)', 'https://www.usnews.com/education/best-colleges/articles/reasons-to-visit-college-after-youve-been-accepted', 'guide'),
            res('15-3', 'Talking to Current Students Before Deciding', 'https://www.collegeessayguy.com/blog/how-to-research-a-college', 'article'),
            res('15-4', 'Financial Aid Comparison Spreadsheet Template', 'https://www.consumerfinance.gov/consumer-tools/college-financial-aid-comparison-tool/', 'tool'),
            res('15-5', 'Deferral & Waitlist — What to Do Now', 'https://www.collegeessayguy.com/blog/waitlist-deferral-letter-of-continued-interest', 'guide'),
            res('15-6', 'Telling Other Schools You Won\'t Attend', 'https://www.commonapp.org/blog/how-decline-college-acceptance', 'guide'),
            res('15-7', 'Gap Year Option — When It Makes Sense', 'https://www.gapyearassociation.org/', 'article'),
        ],
    },

    {
        id: 'node-15-l',
        title: 'Waitlist Strategy',
        description: 'PLACEHOLDER — Branch for students waitlisted at a dream school. LOCI letters, updates, and managing hope vs reality.',
        status: 'upcoming',
        level: 15,
        position: 'left',
        icon: Search,
        resources: [
            res('15l-1', 'Letter of Continued Interest (LOCI) Template', 'https://www.collegeessayguy.com/blog/how-to-write-a-letter-of-continued-interest', 'guide'),
            res('15l-2', 'How Many Students Get Off Waitlists?', 'https://www.compassprep.com/waitlist-stats/', 'article'),
            res('15l-3', 'What Updates to Send After Being Waitlisted', 'https://veritasprep.com/blog/waitlisted-now-what/', 'guide'),
            res('15l-4', 'When to Give Up on the Waitlist', 'https://www.usnews.com/education/best-colleges/articles/what-to-do-if-youre-on-a-college-waitlist', 'article'),
            res('15l-5', 'Contacting the Admissions Office Professionally', 'https://admission.yale.edu/waitlist', 'guide'),
            res('15l-6', 'Depositing Elsewhere While Waitlisted', 'https://www.commonapp.org/blog/college-waitlist-faq', 'guide'),
            res('15l-7', 'Waitlist Stories: Real Student Outcomes', 'https://www.reddit.com/r/ApplyingToCollege/comments/m8kcl3/waitlist_loci_guide_what_to_do_after_being/', 'article'),
        ],
    },

    {
        id: 'node-15-r',
        title: 'Gap Year Planning',
        description: 'PLACEHOLDER — Branch for students deferring enrollment or choosing a structured gap year instead.',
        status: 'upcoming',
        level: 15,
        position: 'right',
        icon: Globe,
        resources: [
            res('15r-1', 'How to Request a Gap Year Deferral', 'https://www.collegeessayguy.com/blog/gap-year-request-letter', 'guide'),
            res('15r-2', 'Structured Gap Year Programs Ranked', 'https://www.gapyearassociation.org/accredited-organizations/', 'tool'),
            res('15r-3', 'AmeriCorps, City Year & Service Gap Years', 'https://americorps.gov/', 'official'),
            res('15r-4', 'International Gap Year Safety & Planning', 'https://www.state.gov/travelers/', 'guide'),
            res('15r-5', 'Using a Gap Year to Strengthen a Transfer App', 'https://www.usnews.com/education/blogs/college-admissions-playbook/articles/2019-06-17/how-a-gap-year-affects-college-admissions', 'article'),
            res('15r-6', 'Financial Planning During a Gap Year', 'https://www.forbes.com/advisor/student-loans/how-to-afford-a-gap-year/', 'guide'),
            res('15r-7', 'Gap Year Journals & Community Resources', 'https://www.gooverseas.com/gap-year', 'tool'),
        ],
    },

    {
        id: 'node-16',
        title: 'Committed — What\'s Next',
        description: 'PLACEHOLDER — You\'ve committed! Final steps: housing, orientation, scholarships to accept, and senior summer prep.',
        status: 'upcoming',
        level: 16,
        position: 'center',
        icon: Sparkles,
        resources: [
            res('16-1', 'Housing Application & Roommate Matching Tips', 'https://www.unigo.com/college-advice/college-life/how-to-choose-a-college-roommate', 'guide'),
            res('16-2', 'Orientation Prep — What to Expect', 'https://bigfuture.collegeboard.org/plan-for-college/after-you-apply/off-to-college-checklist', 'guide'),
            res('16-3', 'Final Scholarship Acceptance Steps', 'https://www.collegedata.com/resources/pay-your-way/how-to-claim-your-scholarship', 'official'),
            res('16-4', 'Sending Final Transcripts to Your College', 'https://commonapp.org/help/final-transcripts', 'official'),
            res('16-5', 'What to Do the Summer Before College', 'https://www.collegeessayguy.com/blog/summer-before-college', 'article'),
            res('16-6', 'College Packing List — What You Actually Need', 'https://www.bedbathandbeyond.com/college-checklist', 'guide'),
            res('16-7', 'Staying Connected With Your High School Network', 'https://www.forbes.com/sites/nextavenue/2018/06/12/why-you-should-keep-in-touch-with-your-high-school-teachers/', 'article'),
        ],
    },
];