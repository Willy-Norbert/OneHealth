(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/lib/blog-data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "blogAuthors": (()=>blogAuthors),
    "blogCategories": (()=>blogCategories),
    "blogPosts": (()=>blogPosts),
    "blogTags": (()=>blogTags),
    "featuredPosts": (()=>featuredPosts),
    "popularPosts": (()=>popularPosts)
});
const blogCategories = [
    {
        name: "Health Tips",
        slug: "health-tips",
        count: 12
    },
    {
        name: "Medical Research",
        slug: "medical-research",
        count: 8
    },
    {
        name: "Nutrition",
        slug: "nutrition",
        count: 10
    },
    {
        name: "Mental Health",
        slug: "mental-health",
        count: 7
    },
    {
        name: "Maternal Health",
        slug: "maternal-health",
        count: 5
    },
    {
        name: "Child Health",
        slug: "child-health",
        count: 6
    },
    {
        name: "COVID-19",
        slug: "covid-19",
        count: 9
    },
    {
        name: "Fitness",
        slug: "fitness",
        count: 4
    }
];
const blogTags = [
    {
        name: "Wellness",
        slug: "wellness"
    },
    {
        name: "Prevention",
        slug: "prevention"
    },
    {
        name: "Healthy Living",
        slug: "healthy-living"
    },
    {
        name: "Diet",
        slug: "diet"
    },
    {
        name: "Exercise",
        slug: "exercise"
    },
    {
        name: "Mental Wellbeing",
        slug: "mental-wellbeing"
    },
    {
        name: "Pregnancy",
        slug: "pregnancy"
    },
    {
        name: "Vaccination",
        slug: "vaccination"
    },
    {
        name: "Chronic Disease",
        slug: "chronic-disease"
    },
    {
        name: "Healthcare Access",
        slug: "healthcare-access"
    },
    {
        name: "Traditional Medicine",
        slug: "traditional-medicine"
    },
    {
        name: "Public Health",
        slug: "public-health"
    }
];
const blogAuthors = [
    {
        id: "author1",
        name: "Dr. Jean Mugabo",
        avatar: "/placeholder.svg?height=200&width=200",
        bio: "Dr. Jean Mugabo is a senior healthcare consultant with over 15 years of experience in public health and healthcare management in Rwanda.",
        specialties: [
            "Public Health",
            "Healthcare Policy",
            "Preventive Medicine"
        ]
    },
    {
        id: "author2",
        name: "Dr. Marie Uwase",
        avatar: "/placeholder.svg?height=200&width=200",
        bio: "Dr. Marie Uwase is a nutritionist and wellness expert specializing in maternal and child nutrition. She has worked extensively in rural communities across Rwanda.",
        specialties: [
            "Nutrition",
            "Maternal Health",
            "Child Health"
        ]
    },
    {
        id: "author3",
        name: "Dr. Emmanuel Nkusi",
        avatar: "/placeholder.svg?height=200&width=200",
        bio: "Dr. Emmanuel Nkusi is a mental health specialist with a focus on trauma recovery and community mental health programs in post-conflict settings.",
        specialties: [
            "Mental Health",
            "Trauma Recovery",
            "Community Health"
        ]
    },
    {
        id: "author4",
        name: "Claudine Mukamana",
        avatar: "/placeholder.svg?height=200&width=200",
        bio: "Claudine Mukamana is a public health researcher and advocate for healthcare access in underserved communities. She has published extensively on healthcare equity in Rwanda.",
        specialties: [
            "Healthcare Access",
            "Health Equity",
            "Community Engagement"
        ]
    }
];
const featuredPosts = [
    {
        id: "post1",
        title: "10 Essential Health Tips for Rwandan Families",
        slug: "essential-health-tips-rwandan-families",
        excerpt: "Practical health advice tailored to the Rwandan context, covering nutrition, preventive care, and wellness practices for the whole family.",
        coverImage: "/placeholder.svg?height=600&width=800",
        date: "May 10, 2023",
        readTime: 8,
        category: "Health Tips",
        author: blogAuthors[0],
        tags: [
            "Wellness",
            "Prevention",
            "Family Health"
        ]
    },
    {
        id: "post2",
        title: "Understanding Maternal Healthcare in Rwanda: Progress and Challenges",
        slug: "maternal-healthcare-rwanda-progress-challenges",
        excerpt: "An in-depth look at the state of maternal healthcare in Rwanda, highlighting achievements, ongoing challenges, and future directions.",
        coverImage: "/placeholder.svg?height=600&width=800",
        date: "April 25, 2023",
        readTime: 12,
        category: "Maternal Health",
        author: blogAuthors[1],
        tags: [
            "Maternal Health",
            "Healthcare Access",
            "Public Health"
        ]
    },
    {
        id: "post3",
        title: "Mental Health Awareness in Rwanda: Breaking the Stigma",
        slug: "mental-health-awareness-rwanda-breaking-stigma",
        excerpt: "Exploring the growing mental health awareness in Rwanda and efforts to reduce stigma and increase access to mental health services.",
        coverImage: "/placeholder.svg?height=600&width=800",
        date: "March 15, 2023",
        readTime: 10,
        category: "Mental Health",
        author: blogAuthors[2],
        tags: [
            "Mental Health",
            "Stigma",
            "Awareness"
        ]
    }
];
const popularPosts = [
    {
        id: "popular1",
        title: "COVID-19 Vaccination: What Rwandans Need to Know",
        slug: "covid-19-vaccination-rwandans-need-to-know",
        coverImage: "/placeholder.svg?height=300&width=400",
        date: "February 8, 2023"
    },
    {
        id: "popular2",
        title: "Traditional Medicine in Modern Healthcare: Finding Balance",
        slug: "traditional-medicine-modern-healthcare-balance",
        coverImage: "/placeholder.svg?height=300&width=400",
        date: "January 20, 2023"
    },
    {
        id: "popular3",
        title: "Nutrition for Children: Building Healthy Habits Early",
        slug: "nutrition-children-building-healthy-habits-early",
        coverImage: "/placeholder.svg?height=300&width=400",
        date: "December 12, 2022"
    },
    {
        id: "popular4",
        title: "Healthcare Access in Rural Rwanda: Innovations and Solutions",
        slug: "healthcare-access-rural-rwanda-innovations-solutions",
        coverImage: "/placeholder.svg?height=300&width=400",
        date: "November 5, 2022"
    }
];
const blogPosts = [
    ...featuredPosts,
    {
        id: "post4",
        title: "Nutrition Guidelines for Pregnant Women in Rwanda",
        slug: "nutrition-guidelines-pregnant-women-rwanda",
        excerpt: "Comprehensive nutritional advice for pregnant women in Rwanda, taking into account local food availability and cultural practices.",
        coverImage: "/placeholder.svg?height=600&width=800",
        date: "March 2, 2023",
        readTime: 9,
        category: "Nutrition",
        author: blogAuthors[1],
        tags: [
            "Nutrition",
            "Pregnancy",
            "Maternal Health"
        ]
    },
    {
        id: "post5",
        title: "Combating Chronic Diseases in Rwanda: Prevention and Management",
        slug: "combating-chronic-diseases-rwanda-prevention-management",
        excerpt: "Strategies for preventing and managing chronic diseases like diabetes and hypertension in the Rwandan context.",
        coverImage: "/placeholder.svg?height=600&width=800",
        date: "February 18, 2023",
        readTime: 11,
        category: "Medical Research",
        author: blogAuthors[0],
        tags: [
            "Chronic Disease",
            "Prevention",
            "Healthcare Management"
        ]
    },
    {
        id: "post6",
        title: "Child Immunization in Rwanda: Success Stories and Remaining Gaps",
        slug: "child-immunization-rwanda-success-stories-gaps",
        excerpt: "An overview of Rwanda's impressive child immunization program, with insights into areas that still need attention.",
        coverImage: "/placeholder.svg?height=600&width=800",
        date: "January 30, 2023",
        readTime: 7,
        category: "Child Health",
        author: blogAuthors[3],
        tags: [
            "Vaccination",
            "Child Health",
            "Public Health"
        ]
    },
    {
        id: "post7",
        title: "Exercise for Mental Health: Simple Routines for Rwandans",
        slug: "exercise-mental-health-simple-routines-rwandans",
        excerpt: "Practical exercise routines that can improve mental health, designed to be accessible for people with different fitness levels and resources.",
        coverImage: "/placeholder.svg?height=600&width=800",
        date: "January 15, 2023",
        readTime: 6,
        category: "Fitness",
        author: blogAuthors[2],
        tags: [
            "Exercise",
            "Mental Health",
            "Wellness"
        ]
    },
    {
        id: "post8",
        title: "Healthcare Technology in Rwanda: Current Innovations and Future Potential",
        slug: "healthcare-technology-rwanda-innovations-potential",
        excerpt: "Exploring how technology is transforming healthcare delivery in Rwanda, from telemedicine to drone delivery of medical supplies.",
        coverImage: "/placeholder.svg?height=600&width=800",
        date: "December 28, 2022",
        readTime: 10,
        category: "Medical Research",
        author: blogAuthors[3],
        tags: [
            "Technology",
            "Healthcare Access",
            "Innovation"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/blog/blog-categories.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BlogCategories)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/blog-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function BlogCategories() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold mb-4",
                children: "Categories"
            }, void 0, false, {
                fileName: "[project]/components/blog/blog-categories.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: activeCategory === "all" ? "default" : "outline",
                        className: activeCategory === "all" ? "bg-blue-600 hover:bg-blue-700" : "",
                        onClick: ()=>setActiveCategory("all"),
                        children: "All"
                    }, void 0, false, {
                        fileName: "[project]/components/blog/blog-categories.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogCategories"].map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: activeCategory === category.slug ? "default" : "outline",
                            className: activeCategory === category.slug ? "bg-blue-600 hover:bg-blue-700" : "",
                            onClick: ()=>setActiveCategory(category.slug),
                            children: category.name
                        }, category.slug, false, {
                            fileName: "[project]/components/blog/blog-categories.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/blog/blog-categories.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/blog/blog-categories.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(BlogCategories, "OSJOodcB9VWdFfwZDjGR3eSh4To=");
_c = BlogCategories;
var _c;
__turbopack_context__.k.register(_c, "BlogCategories");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_4523cde9._.js.map