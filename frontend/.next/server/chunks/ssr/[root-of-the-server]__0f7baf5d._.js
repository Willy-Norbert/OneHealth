module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/contexts/AuthContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthProvider": (()=>AuthProvider),
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useAuth = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
const AuthProvider = ({ children })=>{
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://onehealth-m0s2.onrender.com/api';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        checkAuth();
    }, []);
    const checkAuth = async ()=>{
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setLoading(false);
                return;
            }
            const response = await fetch(`${API_URL}/auth/me`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data.data.user);
            } else {
                localStorage.removeItem('token');
            }
        } catch (error) {
            console.error('Auth check failed:', error);
            localStorage.removeItem('token');
        } finally{
            setLoading(false);
        }
    };
    const login = async (email, password)=>{
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                setUser(data.data.user);
                // Navigate based on user role
                const userRole = data.data.user.role;
                if (userRole === 'admin') {
                    window.location.href = '/admin';
                } else if (userRole === 'doctor') {
                    window.location.href = '/doctor';
                } else if (userRole === 'patient') {
                    window.location.href = '/patient';
                } else {
                    window.location.href = '/';
                }
            } else {
                throw new Error(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };
    const register = async (name, email, password, role = 'patient')=>{
        try {
            const response = await fetch(`${API_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    role
                })
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                setUser(data.data.user);
                // Navigate based on user role (default to patient for new registrations)
                const userRole = data.data.user.role || 'patient';
                if (userRole === 'admin') {
                    window.location.href = '/admin';
                } else if (userRole === 'doctor') {
                    window.location.href = '/doctor';
                } else if (userRole === 'patient') {
                    window.location.href = '/patient';
                } else {
                    window.location.href = '/';
                }
            } else {
                throw new Error(data.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    };
    const logout = async ()=>{
        try {
            await fetch(`${API_URL}/auth/logout`, {
                method: 'POST',
                credentials: 'include'
            });
        } catch (error) {
            console.error('Logout error:', error);
        } finally{
            localStorage.removeItem('token');
            setUser(null);
        }
    };
    const value = {
        user,
        login,
        register,
        logout,
        loading,
        isLoading: loading,
        isAuthenticated: !!user
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/AuthContext.tsx",
        lineNumber: 173,
        columnNumber: 10
    }, this);
};
}}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/components/cookie-consent.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CookieConsent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function CookieConsent() {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDetails, setShowDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check if user has already consented
        const hasConsented = localStorage.getItem("cookieConsent");
        if (!hasConsented) {
            // Show banner after a short delay for better UX
            const timer = setTimeout(()=>{
                setIsVisible(true);
            }, 1500);
            return ()=>clearTimeout(timer);
        }
    }, []);
    const acceptAll = ()=>{
        localStorage.setItem("cookieConsent", "all");
        setIsVisible(false);
    };
    const acceptEssential = ()=>{
        localStorage.setItem("cookieConsent", "essential");
        setIsVisible(false);
    };
    const toggleDetails = ()=>{
        setShowDetails(!showDetails);
    };
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4 md:p-6 animate-slide-up",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 pr-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-gray-900 mb-2",
                                children: "Cookie Consent"
                            }, void 0, false, {
                                fileName: "[project]/components/cookie-consent.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm mb-4",
                                children: "We use cookies to enhance your experience on our website. By continuing to browse, you agree to our use of cookies."
                            }, void 0, false, {
                                fileName: "[project]/components/cookie-consent.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            showDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 text-sm bg-gray-50 p-4 rounded-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-medium text-gray-900 mb-2",
                                        children: "Cookie Types"
                                    }, void 0, false, {
                                        fileName: "[project]/components/cookie-consent.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc pl-5 space-y-1 text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "Essential:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/cookie-consent.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Required for basic website functionality"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/cookie-consent.tsx",
                                                lineNumber: 55,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "Analytics:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/cookie-consent.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Help us understand how you use our website"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/cookie-consent.tsx",
                                                lineNumber: 58,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "Marketing:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/cookie-consent.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Allow us to provide personalized content"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/cookie-consent.tsx",
                                                lineNumber: 61,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "Preferences:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/cookie-consent.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Remember your settings and choices"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/cookie-consent.tsx",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/cookie-consent.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3",
                                        children: [
                                            "For more information, please read our",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/privacy-policy",
                                                className: "text-blue-600 hover:underline",
                                                children: "Privacy Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/components/cookie-consent.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/cookie-consent.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cookie-consent.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: acceptAll,
                                        className: "bg-green-600 hover:bg-green-700 text-white",
                                        children: "Accept All"
                                    }, void 0, false, {
                                        fileName: "[project]/components/cookie-consent.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: acceptEssential,
                                        variant: "outline",
                                        className: "border-gray-300 text-gray-700 hover:bg-gray-50",
                                        children: "Essential Only"
                                    }, void 0, false, {
                                        fileName: "[project]/components/cookie-consent.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: toggleDetails,
                                        variant: "ghost",
                                        className: "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
                                        children: showDetails ? "Hide Details" : "Cookie Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/components/cookie-consent.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cookie-consent.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cookie-consent.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: acceptEssential,
                        className: "text-gray-400 hover:text-gray-600 p-1",
                        "aria-label": "Close cookie consent banner",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/components/cookie-consent.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/cookie-consent.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cookie-consent.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/cookie-consent.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/cookie-consent.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/back-to-top.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BackToTop)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-ssr] (ecmascript) <export default as ArrowUp>");
"use client";
;
;
;
;
function BackToTop() {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Show button when page is scrolled down
    const toggleVisibility = ()=>{
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    // Set the top coordinate to 0
    // Make scrolling smooth
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.addEventListener("scroll", toggleVisibility);
        return ()=>window.removeEventListener("scroll", toggleVisibility);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
            onClick: scrollToTop,
            className: "fixed bottom-4 right-4 z-40 rounded-full w-10 h-10 p-0 bg-green-600 hover:bg-green-700 shadow-lg",
            "aria-label": "Back to top",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/components/back-to-top.tsx",
                lineNumber: 41,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/back-to-top.tsx",
            lineNumber: 36,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
}}),
"[project]/contexts/LanguageContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LanguageProvider": (()=>LanguageProvider),
    "useLanguage": (()=>useLanguage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const translations = {
    en: {
        "patient": {
            "dashboard": {
                "title": "Patient Dashboard",
                "subtitle": "Manage your health and appointmentsss",
                "quickStats": {
                    "upcomingAppointments": "Upcoming Appointments",
                    "activePrescriptions": "Active Prescriptions",
                    "healthScore": "Health Score"
                },
                "quickActions": {
                    "bookAppointment": {
                        "title": "Book Appointment",
                        "description": "Schedule a visit with your healthcare provider"
                    },
                    "teleconsultation": {
                        "title": "Teleconsultation",
                        "description": "Connect with doctors virtually"
                    },
                    "pharmacyOrders": {
                        "title": "Pharmacy Orders",
                        "description": "Order medications from partner pharmacies"
                    },
                    "emergencyRequest": {
                        "title": "Emergency Request",
                        "description": "Request immediate medical assistance"
                    },
                    "medicalHistory": {
                        "title": "Medical History",
                        "description": "View your complete medical records"
                    },
                    "aiHealthAssistant": {
                        "title": "AI Health Assistant",
                        "description": "Get health advice and symptom checker"
                    }
                },
                "recentActivity": {
                    "title": "Recent Activity",
                    "appointment": {
                        "title": "Appointment with Dr. Smith",
                        "time": "Tomorrow at 2:00 PM"
                    },
                    "prescription": {
                        "title": "Prescription filled",
                        "status": "Medication ready for pickup"
                    }
                }
            },
            "menu": {
                "dashboard": "Dashboard",
                "bookAppointment": "Book Appointment",
                "teleconsultation": "Teleconsultation",
                "pharmacyOrders": "Pharmacy Orders",
                "aiAssistant": "AI Assistant",
                "emergency": "Emergency",
                "history": "History"
            },
            "header": {
                "panel": "Patient Panel"
            },
            "user": {
                "role": "Patient"
            }
        },
        "nav": {
            "logout": "Logout"
        },
        "register": {
            "title": "Create Account",
            "description": "Join ONE HEALTHLINE CONNECT today",
            "labels": {
                "fullName": "Full Name",
                "email": "Email Address",
                "password": "Password",
                "confirmPassword": "Confirm Password",
                "accountType": "Account Type"
            },
            "placeholders": {
                "fullName": "Enter your full name",
                "email": "Enter your email",
                "password": "Enter your password",
                "confirmPassword": "Confirm your password"
            },
            "roles": {
                "patient": "Patient",
                "doctor": "Doctor",
                "admin": "Admin"
            },
            "buttons": {
                "createAccount": "Create Account",
                "creatingAccount": "Creating account...",
                "signIn": "Sign in"
            },
            "alreadyHaveAccount": "Already have an account?",
            "errors": {
                "passwordMismatch": "Passwords do not match",
                "passwordTooShort": "Password must be at least 6 characters long",
                "registrationFailed": "Registration failed. Please try again."
            }
        },
        "loginForm": {
            "title": "Welcome Back",
            "description": "Sign in to your ONE HEALTHLINE CONNECT account",
            "emailLabel": "Email Address",
            "emailPlaceholder": "Enter your email",
            "passwordLabel": "Password",
            "passwordPlaceholder": "Enter your password",
            "signIn": "Sign In",
            "signingIn": "Signing in...",
            "noAccount": "Don't have an account?",
            "signUp": "Sign up",
            "errorFallback": "Login failed. Please try again."
        },
        "contactCta": {
            "heading": "Stay Connected with ONE HEALTHLINE CONNECT",
            "description": "Download our app for the fastest way to access our services, contact our team, and manage your healthcare needs on the go.",
            "downloadApp": "Download Our App",
            "liveChat": "Live Chat Support",
            "callUs": "Call Us Now",
            "socialFollow": "Follow us on social media for updates, health tips, and more"
        },
        "social": {
            "facebook": "Facebook",
            "twitter": "Twitter",
            "instagram": "Instagram",
            "youtube": "YouTube"
        },
        "faq2": {
            "heading": "Frequently Asked Questions",
            "description": "Find answers to common questions about contacting and communicating with ONE HEALTHLINE CONNECT",
            "items": [
                {
                    "question": "What are the best ways to contact ONE HEALTHLINE CONNECT?",
                    "answer": "You can contact us through multiple channels: phone (+250 788 123 456), email (info@healthlinerwanda.com), the contact form on our website, or through the messaging feature in our mobile app. For emergencies, please use our emergency hotline (+250 788 999 911) or the Emergency Assistance feature in the app."
                },
                {
                    "question": "How quickly can I expect a response to my inquiry?",
                    "answer": "For general inquiries submitted through our contact form or email, we aim to respond within 24 hours during business days. Phone calls are typically answered immediately during business hours. For urgent medical matters, please use our emergency services for immediate assistance."
                },
                {
                    "question": "Can I visit your offices without an appointment?",
                    "answer": "Yes, you can visit our offices during regular business hours without an appointment for general inquiries or assistance with the app. However, for meetings with specific team members or for detailed discussions about partnerships or services, we recommend scheduling an appointment in advance to ensure the relevant staff are available."
                },
                {
                    "question": "How do I provide feedback about your services?",
                    "answer": "We welcome your feedback! You can provide feedback through our contact form (select 'Feedback' from the department dropdown), email us at feedback@healthlinerwanda.com, or use the feedback feature in our mobile app. Your insights help us improve our services and better meet the healthcare needs of our users."
                },
                {
                    "question": "Who should I contact for technical issues with the app?",
                    "answer": "For technical support with the ONE HEALTHLINE CONNECT app, please contact our technical support team at support@healthlinerwanda.com or call +250 788 123 456 and select the technical support option. You can also submit a support ticket through our contact form by selecting 'Technical Support' from the department dropdown."
                },
                {
                    "question": "How can I report an emergency situation?",
                    "answer": "For medical emergencies, please call our 24/7 emergency hotline at +250 788 999 911 or use the Emergency Assistance button in the ONE HEALTHLINE CONNECT app. Our emergency response team will assess your situation and dispatch appropriate help immediately."
                }
            ]
        },
        "contactLocations": {
            "heading": "Our Locations",
            "description": "Visit one of our physical locations for in-person assistance with our healthcare services",
            "viewOnMap": "View on Map",
            "locations": {
                "1": {
                    "name": "ONE HEALTHLINE CONNECT Headquarters",
                    "address": "KG 123 St, Kigali, Rwanda",
                    "phone": "+250 788 123 456"
                },
                "2": {
                    "name": "Butaro Branch Office",
                    "address": "Near Butaro Hospital, Burera District, Rwanda",
                    "phone": "+250 788 234 567"
                },
                "3": {
                    "name": "Muhima Service Center",
                    "address": "KN 2 Ave, Muhima, Kigali, Rwanda",
                    "phone": "+250 788 345 678"
                }
            }
        },
        "contactInfo": {
            "heading": "Contact Information",
            "description": "Reach out to us through any of the following channels for assistance with our healthcare services",
            "cards": {
                "location": {
                    "title": "Our Location",
                    "details": [
                        "KG 123 St, Kigali",
                        "Rwanda"
                    ]
                },
                "phone": {
                    "title": "Phone Numbers",
                    "details": [
                        "+250 788 123 456",
                        "Emergency: +250 788 999 911"
                    ]
                },
                "email": {
                    "title": "Email Addresses",
                    "details": [
                        "info@healthlinerwanda.com",
                        "support@healthlinerwanda.com"
                    ]
                },
                "hours": {
                    "title": "Working Hours",
                    "details": [
                        "Mon-Fri: 8:00 AM - 8:00 PM",
                        "Sat-Sun: 9:00 AM - 5:00 PM"
                    ],
                    "footer": "* Emergency services available 24/7"
                }
            },
            "emergency": {
                "title": "Emergency Contact",
                "desc": "For medical emergencies, please call our 24/7 emergency hotline or use the Emergency Assistance feature in the ONE HEALTHLINE CONNECT app.",
                "hotline": "Emergency Hotline: +250 788 999 911"
            }
        },
        "contactForm": {
            "heading": "Send Us a Message",
            "description": "Fill out the form below and our team will get back to you as soon as possible",
            "labels": {
                "name": "Full Name",
                "email": "Email Address",
                "phone": "Phone Number",
                "department": "Department",
                "subject": "Subject",
                "message": "Message",
                "privacy": "I agree to the {privacyPolicy} and consent to the processing of my personal data."
            },
            "placeholders": {
                "name": "Your name",
                "email": "Your email",
                "phone": "Your phone number",
                "subject": "How can we help you?",
                "message": "Please provide details about your inquiry..."
            },
            "departments": {
                "general": "General Inquiry",
                "appointments": "Appointments",
                "billing": "Billing & Insurance",
                "technical": "Technical Support",
                "feedback": "Feedback"
            },
            "privacyPolicy": "Privacy Policy",
            "privacyLink": "/privacy",
            "required": "*",
            "successTitle": "Message Sent Successfully!",
            "successMessage": "Thank you for reaching out. Our team will get back to you shortly.",
            "sendMessage": "Send Message",
            "sending": "Sending..."
        },
        "contactHero": {
            "heading": "Get in {highlight} With Us",
            "highlight": "Touch",
            "description": "Have questions or need assistance? Our team is here to help you with any inquiries about our healthcare services.",
            "badge1": "24/7 Support Available",
            "badge2": "Multiple Contact Channels",
            "overlayTitle": "We're Here For You",
            "overlayDesc": "Reach out through your preferred channel",
            "badgeFloating1": "Quick Response",
            "badgeFloating2": "Professional Support"
        },
        "aboutCta": {
            "heading": "Join Us in Transforming Healthcare in Rwanda",
            "description": "Whether you’re a patient seeking care, a healthcare provider looking to expand your reach, or an organization interested in partnering with us, we invite you to be part of our journey.",
            "downloadButton": "Download Our App",
            "contactButton": "Contact Us"
        },
        "achievements": {
            "heading": "Milestones & Achievements",
            "subheading": "Our journey of growth and impact in the Rwandan healthcare landscape",
            "milestonesTitle": "Our Journey",
            "awardsTitle": "Awards & Recognition",
            "milestones": [
                {
                    "year": "2023",
                    "title": "ONE HEALTHLINE CONNECT Founded",
                    "description": "Launched with a mission to transform healthcare access in Rwanda."
                },
                {
                    "year": "2023",
                    "title": "First Hospital Partnership",
                    "description": "Partnered with Kigali University Hospital to offer teleconsultation services."
                },
                {
                    "year": "2024",
                    "title": "Mobile App Launch",
                    "description": "Released our mobile application for iOS and Android platforms."
                },
                {
                    "year": "2024",
                    "title": "AI Health Assistant",
                    "description": "Introduced our AI-powered health monitoring and advice system."
                },
                {
                    "year": "2024",
                    "title": "Expanded to 10 Hospitals",
                    "description": "Grew our network to include 10 major hospitals across Rwanda."
                },
                {
                    "year": "2025",
                    "title": "5,000 Users Milestone",
                    "description": "Celebrated reaching 5,000 registered users on our platform."
                }
            ],
            "awards": [
                {
                    "title": "Rwanda Innovation Award",
                    "year": "2024",
                    "description": "Recognized for our innovative approach to healthcare delivery."
                },
                {
                    "title": "Best Digital Health Solution",
                    "year": "2024",
                    "description": "Awarded by the Rwanda Information Society Authority."
                },
                {
                    "title": "Healthcare Startup of the Year",
                    "year": "2024",
                    "description": "Named the top healthcare startup by Rwanda Business Magazine."
                },
                {
                    "title": "Community Impact Award",
                    "year": "2025",
                    "description": "Recognized for our contribution to improving healthcare access in rural areas."
                }
            ]
        },
        "partners1": {
            "heading": "Our Partners",
            "subheading": "Collaborating with leading healthcare providers and organizations to deliver exceptional care"
        },
        "ourTeam": {
            "heading": "Leadership Team",
            "subheading": "Meet the dedicated professionals behind ONE HEALTHLINE CONNECT's mission to transform healthcare",
            "roles": {
                "founder": "Founder & CEO",
                "cto": "Chief Technology Officer",
                "cmo": "Chief Medical Officer"
            },
            "bios": {
                "charles": "Cardiologist with over {years} years of experience. Passionate about leveraging technology to improve healthcare access.",
                "urban": "Former Google engineer with expertise in AI and mobile applications. Led the development of our core platform.",
                "willy": "Experienced healthcare administrator who oversees our medical partnerships and ensures quality of care."
            }
        },
        "coreValues": {
            "heading": "Our Core Values",
            "subtitle": "The principles that guide our mission and shape our approach to healthcare",
            "compassion": {
                "title": "Compassion",
                "description": "We approach healthcare with empathy and understanding, recognizing that each patient has unique needs and concerns."
            },
            "integrity": {
                "title": "Integrity",
                "description": "We uphold the highest ethical standards in all our operations, ensuring privacy, security, and transparency."
            },
            "inclusivity": {
                "title": "Inclusivity",
                "description": "We are committed to making healthcare accessible to all Rwandans, regardless of location, income, or background."
            },
            "innovation": {
                "title": "Innovation",
                "description": "We continuously seek new and better ways to deliver healthcare services, leveraging technology to overcome challenges."
            },
            "excellence": {
                "title": "Excellence",
                "description": "We strive for excellence in everything we do, from the quality of our platform to the service we provide to our users."
            },
            "community": {
                "title": "Community",
                "description": "We believe in the power of community and work closely with local healthcare providers to create a robust healthcare ecosystem."
            }
        },
        "ourStory1": {
            "heading": "Our Story",
            "subheading": "The journey of ONE HEALTHLINE CONNECT from an idea to Rwanda's leading healthcare platform",
            "beginning": {
                "title": "The Beginning",
                "text": "ONE HEALTHLINE CONNECT was born out of a personal experience of our founder, Dr. Jean Mugabo, who witnessed firsthand the challenges faced by rural communities in accessing quality healthcare. After losing a family member due to delayed medical attention, he was determined to find a solution that would bridge the gap between patients and healthcare providers."
            },
            "challenge": {
                "title": "The Challenge",
                "text": "In Rwanda, many people still struggle to access healthcare services due to geographical barriers, limited resources, and a shortage of healthcare professionals. This is particularly true for those living in rural areas, who often have to travel long distances to reach the nearest healthcare facility."
            },
            "solution": {
                "title": "The Solution",
                "text": "Leveraging the high mobile phone penetration in Rwanda, we created a digital platform that connects patients with healthcare providers, allowing them to access medical consultations, book appointments, order medications, and receive emergency assistance—all from their mobile devices. By integrating artificial intelligence, we've also been able to provide personalized health monitoring and advice."
            },
            "today": {
                "title": "Today",
                "text": "Today, ONE HEALTHLINE CONNECT serves thousands of patients across the country, partnering with major hospitals, clinics, and pharmacies to provide comprehensive healthcare services. Our team has grown to include healthcare professionals, technology experts, and business leaders, all united by a common mission to improve healthcare access in Rwanda."
            },
            "images": {
                "foundingTeamAlt": "Founding Team",
                "firstOfficeAlt": "First Office",
                "earlyPrototypeAlt": "Early Prototype",
                "currentTeamAlt": "Current Team"
            }
        },
        "cta1": {
            "title": "Need Specialized Medical Care?",
            "subtitle": "Connect with our specialists across various departments for expert diagnosis and treatment tailored to your needs.",
            "book": "Book a Specialist",
            "emergency": "Emergency Assistance",
            "notSure": "Not sure which department you need?",
            "symptomChecker": "Try our symptom checker"
        },
        "faq1": {
            "title": "Frequently Asked Questions",
            "subtitle": "Find answers to common questions about our medical departments and specialists",
            "q1": "How do I know which department I need to visit?",
            "a1": "If you're unsure which department you need, you can start with a general practitioner who can assess your condition and refer you to the appropriate specialist. Alternatively, you can use our AI Health Assistant in the app to get guidance based on your symptoms. For emergencies, always use our Emergency Services option.",
            "q2": "Can I request a specific doctor within a department?",
            "a2": "Yes, you can request a specific doctor when booking an appointment. Our platform allows you to browse through specialists in each department, view their profiles, ratings, and availability, and select the one you prefer. However, availability may vary based on the doctor's schedule.",
            "q3": "What should I bring to my department appointment?",
            "a3": "For your appointment, please bring your identification, insurance information (if applicable), a list of current medications, any relevant medical records or test results, and a list of questions or concerns you want to discuss. For virtual consultations, ensure you have a stable internet connection and a quiet, private space.",
            "q4": "How long does a typical specialist appointment last?",
            "a4": "The duration varies by department and the nature of your visit. Initial consultations typically last 30-45 minutes, while follow-up appointments are usually 15-30 minutes. Complex cases may require longer appointments. The estimated duration will be shown when you book your appointment.",
            "q5": "Can I get a second opinion from another specialist in the same department?",
            "a5": "Yes, we encourage patients to seek second opinions when they feel it's necessary. You can book an appointment with another specialist in the same department through our platform. Your medical records can be shared between providers with your consent to ensure continuity of care.",
            "q6": "Are all departments available for virtual consultations?",
            "a6": "Most departments offer virtual consultation options, but some conditions may require in-person visits for proper diagnosis and treatment. When booking, you'll see which appointment types are available for each department and specialist. Some departments may offer initial consultations virtually with follow-up in-person visits if needed."
        },
        "departments1": {
            "featured_title": "Featured Departments",
            "featured_description": "Explore our most sought-after medical departments, offering specialized care with experienced healthcare professionals",
            "specialists_available": "{{count}} Specialists Available",
            "learn_more": "Learn More",
            "departments_list": {
                "cardiology": {
                    "name": "Cardiology",
                    "description": "Our Cardiology department provides comprehensive care for heart and cardiovascular conditions. From diagnostic tests to advanced treatments, our cardiologists are equipped to handle everything from routine check-ups to complex heart conditions.",
                    "services": [
                        "Echocardiography",
                        "ECG",
                        "Cardiac Stress Testing",
                        "Heart Disease Management",
                        "Hypertension Care"
                    ]
                },
                "neurology": {
                    "name": "Neurology",
                    "description": "The Neurology department specializes in disorders of the nervous system, including the brain, spinal cord, and peripheral nerves. Our neurologists use advanced diagnostic tools and treatments to address conditions ranging from headaches to complex neurological disorders.",
                    "services": [
                        "EEG Testing",
                        "Neurological Examinations",
                        "Headache Management",
                        "Stroke Care",
                        "Movement Disorder Treatment"
                    ]
                },
                "pediatrics": {
                    "name": "Pediatrics",
                    "description": "Our Pediatrics department is dedicated to the health and well-being of children from birth through adolescence. Our pediatricians provide preventive care, treat childhood illnesses, and monitor developmental milestones to ensure your child grows healthy and strong.",
                    "services": [
                        "Well-Child Visits",
                        "Vaccinations",
                        "Growth Monitoring",
                        "Developmental Assessments",
                        "Pediatric Consultations"
                    ]
                }
            }
        },
        about: {
            title1: "About",
            highlight: "HEALTHLINE",
            title2: "RWANDA",
            subtitle: "Transforming healthcare access in Rwanda through innovative digital solutions",
            imageAlt: "ONE HEALTHLINE CONNECT Team",
            bottomTitle: "Bridging the Gap in Healthcare Access",
            bottomDescription: "Founded in 2025, ONE HEALTHLINE CONNECT is dedicated to making quality healthcare accessible to all Rwandans through technology and innovation."
        },
        "departments": {
            "meet_doctors_title": "Meet Our Doctors",
            "meet_doctors_description": "Our departments are staffed by experienced healthcare professionals dedicated to providing exceptional care",
            "reviews": "{{count}} reviews",
            "book_appointment": "Book Appointment",
            "view_all_doctors": "View All Doctors",
            "title": "Our Medical Departments",
            "subtitle": "ONE HEALTHLINE CONNECT offers access to a wide range of medical specialties to address all your healthcare needs",
            "cardiology": {
                "name": "Cardiology",
                "description": "Diagnosis and treatment of heart diseases and cardiovascular conditions"
            },
            "pediatrics": {
                "name": "Pediatrics",
                "description": "Medical care for infants, children, and adolescents"
            },
            "orthopedics": {
                "name": "Orthopedics",
                "description": "Treatment of musculoskeletal system including bones, joints, and muscles"
            },
            "neurology": {
                "name": "Neurology",
                "description": "Diagnosis and treatment of disorders of the nervous system"
            },
            "dermatology": {
                "name": "Dermatology",
                "description": "Medical care for skin, hair, and nail conditions"
            },
            "ophthalmology": {
                "name": "Ophthalmology",
                "description": "Diagnosis and treatment of eye disorders and vision problems"
            },
            "ent": {
                "name": "ENT",
                "description": "Treatment of ear, nose, throat, head and neck disorders"
            },
            "gynecology": {
                "name": "Gynecology",
                "description": "Women's reproductive health and pregnancy care"
            },
            "urology": {
                "name": "Urology",
                "description": "Diagnosis and treatment of urinary tract and male reproductive system"
            },
            "psychiatry": {
                "name": "Psychiatry",
                "description": "Mental health care including therapy and medication management"
            },
            "dentistry": {
                "name": "Dentistry",
                "description": "Oral health care, preventive and restorative dental treatments"
            },
            "nutrition": {
                "name": "Nutrition",
                "description": "Dietary guidance and nutritional therapy for various health conditions"
            }
        },
        "medicalDepartments": {
            "title": "Medical",
            "highlight": "Departments",
            "subtitle": "Specialties",
            "description": "Access specialized healthcare services across multiple medical fields from Rwanda's top healthcare professionals.",
            "searchPlaceholder": "Search for a department or condition...",
            "departments": {
                "cardiology": "Cardiology",
                "pediatrics": "Pediatrics",
                "orthopedics": "Orthopedics",
                "neurology": "Neurology"
            },
            "imageAlt": "Medical Departments",
            "specializedCareTitle": "Specialized Care",
            "departmentsCount": "12+ medical departments available",
            "badges": {
                "expertSpecialists": "Expert Specialists",
                "advancedTreatments": "Advanced Treatments"
            }
        },
        "faq": {
            "title": "Frequently Asked Questions",
            "subtitle": "Find answers to common questions about our services. If you don't see your question here, feel free to contact us.",
            "teleconsultation": {
                "question": "How do I book a teleconsultation?",
                "answer": "To book a teleconsultation, download the ONE HEALTHLINE CONNECT app, create an account, and navigate to the Teleconsultation section. Select your preferred specialist, choose an available time slot, and confirm your booking. You'll receive a confirmation notification and a reminder before your appointment."
            },
            "specialists": {
                "question": "What types of specialists are available on the platform?",
                "answer": "ONE HEALTHLINE CONNECT partners with a wide range of specialists including general practitioners, pediatricians, cardiologists, dermatologists, psychiatrists, nutritionists, and more. The availability of specialists may vary based on your location and the time of day."
            },
            "emergency": {
                "question": "How does the emergency service work?",
                "answer": "In case of an emergency, open the ONE HEALTHLINE CONNECT app and tap the Emergency button. You'll be connected to our emergency response team who will assess your situation and dispatch appropriate help. The app also shares your GPS location to ensure help reaches you quickly."
            },
            "prescriptionOrder": {
                "question": "Can I order prescription medications through the app?",
                "answer": "Yes, you can order prescription medications through the app. After a consultation, your doctor can send a digital prescription directly to our partner pharmacies. Alternatively, you can upload a physical prescription through the app. Select your preferred pharmacy, review your order, and choose delivery or pickup."
            },
            "aiAssistantAccuracy": {
                "question": "How accurate is the AI Health Assistant?",
                "answer": "Our AI Health Assistant is designed to provide general health information and guidance based on the data you provide. While it uses advanced algorithms to analyze symptoms and health data, it is not a replacement for professional medical advice. Always consult with a healthcare professional for diagnosis and treatment."
            },
            "dataSecurity": {
                "question": "Is my health data secure on the platform?",
                "answer": "Yes, we take data security very seriously. All health data is encrypted and stored securely in compliance with data protection regulations. We do not share your personal health information with third parties without your explicit consent, except when required by law or in emergency situations."
            }
        },
        "servicesCta": {
            "title": "Get Started with Our Healthcare Services",
            "description": "Download our app or contact us today to access fast, reliable, and affordable healthcare solutions.",
            "downloadApp": "Download the App",
            "contactUs": "Contact Us"
        },
        "pricing": {
            "title": "Simple, Transparent Pricing",
            "subtitle": "Choose the plan that best fits your healthcare needs. All plans include access to our core services.",
            "mostPopular": "Most Popular",
            "ctaBusiness": "Contact Sales",
            "ctaDefault": "Get Started",
            "note": "All plans include access to our mobile app and web platform. Prices are in Rwandan Francs (RWF). For business plans, please contact our sales team for a customized quote.",
            "plans": {
                "basic": {
                    "name": "Basic",
                    "price": "Free",
                    "description": "Essential healthcare services for individuals",
                    "features": [
                        "Teleconsultation with general practitioners",
                        "Basic appointment booking",
                        "Emergency assistance",
                        "Medication ordering (delivery fees apply)",
                        "Limited AI health assistant features"
                    ]
                },
                "premium": {
                    "name": "Premium",
                    "price": "5,000 RWF",
                    "period": "per month",
                    "description": "Advanced healthcare services for individuals and families",
                    "features": [
                        "Unlimited teleconsultations with all specialists",
                        "Priority appointment booking",
                        "Emergency assistance with priority dispatch",
                        "Medication ordering with free delivery",
                        "Full AI health assistant features",
                        "Family accounts (up to 4 members)",
                        "Health records storage and sharing"
                    ]
                },
                "business": {
                    "name": "Business",
                    "price": "Custom",
                    "description": "Healthcare solutions for organizations and businesses",
                    "features": [
                        "Custom healthcare plans for employees",
                        "Dedicated account manager",
                        "Bulk appointment scheduling",
                        "Employee health monitoring dashboard",
                        "Corporate wellness programs",
                        "Integration with existing health benefits"
                    ]
                }
            }
        },
        "howItWorks": {
            "title": "How It Works",
            "subtitle": "A simple 4-step process to get started",
            "step1": {
                "title": "Sign Up",
                "description": "Create your free account in just a few minutes."
            },
            "step2": {
                "title": "Provide Your Details",
                "description": "Fill in your personal and medical information securely."
            },
            "step3": {
                "title": "Choose a Service",
                "description": "Select the healthcare service that fits your needs."
            },
            "step4": {
                "title": "Get Connected",
                "description": "Start your consultation or service instantly."
            }
        },
        "aiDoctor": {
            "label": "AI Health Assistant",
            "title": "Your Personal Health Companion Powered by AI",
            "description": "Our AI Health Assistant provides personalized health monitoring, advice, and guidance based on your health data and concerns. It's like having a healthcare professional in your pocket, available 24/7 to answer questions and provide support for your health journey.",
            "features": {
                "personalizedMonitoring": "Personalized health monitoring and tracking",
                "aiSymptomAssessment": "AI-powered symptom assessment",
                "wellnessRecommendations": "Lifestyle and wellness recommendations",
                "medicationReminders": "Medication reminders and adherence tracking",
                "healthDataAnalysis": "Health data analysis and insights",
                "integrationWithServices": "Seamless integration with other HEALTHLINE services"
            },
            "capabilitiesTitle": "AI Assistant Capabilities",
            "capabilities": {
                "generalInquiries": "General health inquiries",
                "chronicManagement": "Chronic disease management",
                "nutritionAdvice": "Nutrition and diet advice",
                "mentalHealthSupport": "Mental health support",
                "sleepImprovement": "Sleep improvement tips",
                "physicalActivity": "Physical activity recommendations"
            },
            "tryAssistant": "Try AI Assistant",
            "learnMore": "Learn More",
            "imageAlt": "AI Health Assistant",
            "overlay": {
                "healthMonitoringTitle": "Health Monitoring",
                "healthMonitoringDesc": "Track vital signs & symptoms",
                "personalizedPlansTitle": "Personalized Plans",
                "personalizedPlansDesc": "Custom health recommendations",
                "assistanceTitle": "24/7 Assistance",
                "assistanceDesc": "Always available to help"
            }
        },
        "pharmacy": {
            "label": "Pharmacy Services",
            "title": "Order Medications from Partner Pharmacies",
            "description": "Our pharmacy service allows you to order prescription and over-the-counter medications from partner pharmacies across Rwanda...",
            "features": {
                "order": "Order medications from partner pharmacies",
                "upload": "Upload prescriptions directly through the app",
                "compare": "Compare medication prices across pharmacies",
                "delivery": "Home delivery options available",
                "reminders": "Medication reminders and tracking",
                "refill": "Refill notifications for recurring prescriptions"
            },
            "partners": {
                "title": "Partner Pharmacies",
                "kigali": "Kigali Pharmacy",
                "rwanda": "Rwanda Pharmaceuticals",
                "kimironko": "Kimironko Pharmacy",
                "nyamirambo": "Nyamirambo Health Center Pharmacy",
                "remera": "Remera Pharmacy",
                "muhima": "Muhima Hospital Pharmacy"
            },
            "overlay": {
                "delivery": {
                    "title": "Home Delivery",
                    "subtitle": "Within 3 hours in Kigali"
                },
                "reminders": {
                    "title": "Medication Reminders",
                    "subtitle": "Never miss a dose"
                },
                "payment": {
                    "title": "Multiple Payment Options",
                    "subtitle": "Mobile money, cards, cash"
                }
            },
            "imageAlt": "Pharmacy Services",
            "buttons": {
                "order": "Order Medications",
                "view": "View Pharmacies"
            }
        },
        "emergency": {
            "label": "Emergency Services",
            "title": "Immediate Assistance When Every Minute Counts",
            "description": "Our emergency services provide immediate assistance during critical situations...",
            "features": {
                "24_7_hotline": "24/7 emergency assistance hotline",
                "ambulance_dispatch": "Ambulance dispatch services",
                "gps_tracking": "GPS location tracking for faster response",
                "direct_er_connection": "Direct connection to emergency rooms",
                "first_aid_guidance": "First aid guidance over the phone",
                "contact_notification": "Emergency contact notification"
            },
            "types_label": "Emergency Types We Handle",
            "types": {
                "medical": "Medical Emergencies",
                "accidents": "Accidents & Injuries",
                "cardiac": "Cardiac Events",
                "respiratory": "Respiratory Distress",
                "allergic": "Severe Allergic Reactions",
                "pregnancy": "Pregnancy Complications"
            },
            "cta_assistance": "Emergency Assistance",
            "cta_learn_more": "Learn More",
            "image_alt": "Emergency Services",
            "overlay": {
                "ambulance_title": "Ambulance Dispatch",
                "ambulance_sub": "Average arrival: 15 min",
                "medical_guidance_title": "Medical Guidance",
                "medical_guidance_sub": "First aid instructions",
                "gps_title": "GPS Tracking",
                "gps_sub": "Precise location sharing"
            }
        },
        "appointment": {
            "tag": "Appointment Booking",
            "title": "Schedule Appointments with Top Healthcare Providers",
            "description": "Our appointment booking service allows you to schedule visits with healthcare providers at your convenience. Whether you need a routine check-up or a specialist consultation, our platform makes it easy to find and book appointments with the right healthcare professional.",
            "features": [
                "Book appointments with specialists across Rwanda",
                "Choose between in-person or virtual appointments",
                "Receive appointment reminders via SMS and email",
                "Reschedule or cancel appointments with ease",
                "View doctor availability in real-time",
                "Access your appointment history"
            ],
            "partnerHospitalsTitle": "Partner Hospitals",
            "hospitals": [
                "Kigali University Hospital",
                "Rwanda Military Hospital",
                "King Faisal Hospital",
                "Butaro Hospital",
                "Kibagabaga Hospital",
                "CHUK"
            ],
            "buttons": {
                "book": "Book an Appointment",
                "viewSpecialties": "View Specialties"
            },
            "cards": {
                "availability": {
                    "title": "Real-time Availability",
                    "subtitle": "See open slots instantly"
                },
                "location": {
                    "title": "Location Options",
                    "subtitle": "In-person or virtual"
                },
                "facilities": {
                    "title": "Multiple Facilities",
                    "subtitle": "Hospitals across Rwanda"
                }
            }
        },
        // Navigation
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.departments': 'Departments',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.signin': 'Sign In',
        'nav.logout': 'Logout',
        'nav.findDoctor': 'Find a Doctor',
        'nav.bookAppointment': 'Book Appointment',
        'nav.healthBlog': 'Health Blog',
        'nav.ourServices': 'Our Services',
        'nav.teleconsultation': 'Teleconsultation',
        'nav.appointments': 'Appointments',
        'nav.emergency': 'Emergency',
        'nav.pharmacy': 'Pharmacy',
        'nav.aiAssistant': 'Meet Your AI Health Assistant',
        // How It Works
        'howItWorks.title': 'How It Works',
        'howItWorks.subtitle': 'Getting started with ONE HEALTHLINE CONNECT is easy. Follow these simple steps to access our healthcare services.',
        'howItWorks.step1.title': 'Download the App',
        'howItWorks.step1.description': 'Download the ONE HEALTHLINE CONNECT app from the App Store or Google Play Store.',
        'howItWorks.step2.title': 'Create an Account',
        'howItWorks.step2.description': 'Sign up with your phone number or email and complete your health profile.',
        'howItWorks.step3.title': 'Choose a Service',
        'howItWorks.step3.description': 'Select the healthcare service you need from our comprehensive offerings.',
        'howItWorks.step4.title': 'Connect with Providers',
        'howItWorks.step4.description': 'Get connected with healthcare providers, book appointments, or access emergency services.',
        // Common
        'common.loading': 'Loading...',
        'common.error': 'Error',
        'common.success': 'Success',
        'common.cancel': 'Cancel',
        'common.save': 'Save',
        'common.edit': 'Edit',
        'common.delete': 'Delete',
        'common.submit': 'Submit',
        'common.search': 'Search',
        'common.filter': 'Filter',
        'common.reset': 'Reset',
        'common.clear': 'Clear',
        'common.view': 'View',
        'common.download': 'Download',
        'common.upload': 'Upload',
        'common.next': 'Next',
        'common.previous': 'Previous',
        'common.back': 'Back',
        'common.continue': 'Continue',
        'common.confirm': 'Confirm',
        'common.yes': 'Yes',
        'common.no': 'No',
        'common.close': 'Close',
        'common.open': 'Open',
        // Language
        'language.english': 'English',
        'language.kinyarwanda': 'Kinyarwanda',
        // Auth
        'auth.login': 'Login',
        'auth.register': 'Register',
        'auth.email': 'Email',
        'auth.password': 'Password',
        'auth.confirmPassword': 'Confirm Password',
        'auth.firstName': 'First Name',
        'auth.lastName': 'Last Name',
        'auth.phone': 'Phone Number',
        'auth.forgotPassword': 'Forgot Password?',
        'auth.rememberMe': 'Remember Me',
        'auth.alreadyHaveAccount': 'Already have an account?',
        'auth.dontHaveAccount': "Don't have an account?",
        'auth.loginError': 'Login failed. Please check your credentials.',
        'auth.registerError': 'Registration failed. Please try again.',
        'auth.invalidEmail': 'Please enter a valid email address.',
        'auth.passwordTooShort': 'Password must be at least 8 characters.',
        'auth.passwordMismatch': 'Passwords do not match.',
        // Patient Dashboard
        'patient.menu.dashboard': 'Dashboard',
        'patient.menu.bookAppointment': 'Book Appointment',
        'patient.menu.teleconsultation': 'Teleconsultation',
        'patient.menu.pharmacyOrders': 'Pharmacy Orders',
        'patient.menu.aiAssistant': 'AI Assistant',
        'patient.menu.emergency': 'Emergency',
        'patient.menu.history': 'Medical History',
        'patient.header.panel': 'Patient Panel',
        'patient.user.role': 'Patient',
        'patient.dashboard.title': 'Patient Dashboard',
        'patient.dashboard.welcome': 'Welcome back',
        'patient.dashboard.upcomingAppointments': 'Upcoming Appointments',
        'patient.dashboard.recentOrders': 'Recent Pharmacy Orders',
        'patient.dashboard.healthMetrics': 'Health Metrics',
        // Doctor Dashboard
        'doctor.menu.dashboard': 'Dashboard',
        'doctor.menu.appointments': 'Appointments',
        'doctor.menu.patients': 'Patients',
        'doctor.menu.teleconsultations': 'Teleconsultations',
        'doctor.menu.prescriptions': 'Prescriptions',
        'doctor.menu.settings': 'Settings',
        'doctor.header.panel': 'Doctor Panel',
        'doctor.user.role': 'Doctor',
        'doctor.dashboard.title': 'Doctor Dashboard',
        'doctor.dashboard.todayAppointments': "Today's Appointments",
        'doctor.dashboard.totalPatients': 'Total Patients',
        'doctor.dashboard.pendingConsultations': 'Pending Consultations',
        // Admin Dashboard
        'admin.menu.dashboard': 'Dashboard',
        'admin.menu.userManagement': 'User Management',
        'admin.menu.patients': 'Patients',
        'admin.menu.doctors': 'Doctors',
        'admin.menu.appointments': 'Appointments',
        'admin.menu.reports': 'Reports',
        'admin.menu.security': 'Security',
        'admin.menu.settings': 'Settings',
        'admin.menu.analytics': 'Analytics',
        'admin.menu.messages': 'Messages',
        'admin.header.panel': 'Admin Panel',
        'admin.user.admin': 'Administrator',
        'admin.dashboard.title': 'Admin Dashboard',
        'admin.dashboard.totalUsers': 'Total Users',
        'admin.dashboard.activePatients': 'Active Patients',
        'admin.dashboard.activeDoctors': 'Active Doctors',
        'admin.dashboard.todayAppointments': "Today's Appointments",
        // Appointments
        'appointments.title': 'Appointments',
        'appointments.book': 'Book Appointment',
        'appointments.upcoming': 'Upcoming Appointments',
        'appointments.past': 'Past Appointments',
        'appointments.cancelled': 'Cancelled Appointments',
        'appointments.status.confirmed': 'Confirmed',
        'appointments.status.pending': 'Pending',
        'appointments.status.cancelled': 'Cancelled',
        'appointments.status.completed': 'Completed',
        'appointments.selectDoctor': 'Select Doctor',
        'appointments.selectDate': 'Select Date',
        'appointments.selectTime': 'Select Time',
        'appointments.reason': 'Reason for Visit',
        'appointments.notes': 'Additional Notes',
        'appointmentsPage.title': 'Book Your Appointment',
        'appointmentsPage.subtitle': 'Schedule a consultation with our healthcare professionals',
        // Services
        'services.teleconsultation': 'Teleconsultation',
        'services.appointments': 'Appointments',
        'services.emergency': 'Emergency',
        'services.pharmacy': 'Pharmacy',
        'services.aiAssistant': 'AI Health Assistant',
        'services.title': 'Our Services',
        'services.subtitle': 'Comprehensive healthcare services at your fingertips',
        // Forms
        'form.required': 'This field is required',
        'form.invalidEmail': 'Please enter a valid email',
        'form.invalidPhone': 'Please enter a valid phone number',
        'form.selectOption': 'Please select an option',
        'form.enterDetails': 'Please enter details',
        // Footer
        'footer.quickLinks': 'Quick Links',
        'footer.services': 'Services',
        'footer.support': 'Support',
        'footer.legal': 'Legal',
        'footer.contact': 'Contact Us',
        'footer.followUs': 'Follow Us',
        'footer.privacyPolicy': 'Privacy Policy',
        'footer.termsOfService': 'Terms of Service',
        'footer.copyright': '© 2024 ONE HEALTHLINE CONNECT. All rights reserved.',
        'footer.description': 'Your trusted healthcare partner providing quality medical services across Rwanda.',
        // Emergency
        'emergency.title': 'Emergency Services',
        'emergency.description': 'Get immediate medical assistance',
        'emergency.call': 'Call Emergency',
        'emergency.number': '912',
        // Pharmacy
        'pharmacy.title': 'Pharmacy Services',
        'pharmacy.description': 'Order medications and health products',
        'pharmacy.orderMedicine': 'Order Medicine',
        'pharmacy.uploadPrescription': 'Upload Prescription',
        // AI Assistant
        'ai.title': 'AI Health Assistant',
        'ai.description': 'Get personalized health insights and recommendations',
        'ai.startChat': 'Start Chat',
        'ai.askQuestion': 'Ask a Question',
        // Errors
        'error.general': 'Something went wrong. Please try again.',
        'error.network': 'Network error. Please check your connection.',
        'error.unauthorized': 'You are not authorized to access this resource.',
        'error.notFound': 'The requested resource was not found.',
        'error.serverError': 'Server error. Please try again later.',
        // Success Messages
        'success.appointmentBooked': 'Appointment booked successfully!',
        'success.profileUpdated': 'Profile updated successfully!',
        'success.passwordChanged': 'Password changed successfully!',
        'success.emailSent': 'Email sent successfully!',
        // Tables
        'table.name': 'Name',
        'table.email': 'Email',
        'table.phone': 'Phone',
        'table.status': 'Status',
        'table.date': 'Date',
        'table.time': 'Time',
        'table.actions': 'Actions',
        'table.noData': 'No data available',
        'table.loading': 'Loading data...',
        // Modals
        'modal.confirmDelete': 'Are you sure you want to delete this item?',
        'modal.confirmCancel': 'Are you sure you want to cancel?',
        'modal.unsavedChanges': 'You have unsaved changes. Do you want to discard them?',
        // Profile
        'profile.title': 'Profile',
        'profile.personalInfo': 'Personal Information',
        'profile.contactInfo': 'Contact Information',
        'profile.medicalInfo': 'Medical Information',
        'profile.emergencyContact': 'Emergency Contact',
        'profile.updateProfile': 'Update Profile',
        'profile.changePassword': 'Change Password',
        // Settings
        'settings.title': 'Settings',
        'settings.general': 'General',
        'settings.notifications': 'Notifications',
        'settings.privacy': 'Privacy',
        'settings.security': 'Security',
        'settings.language': 'Language',
        'settings.theme': 'Theme',
        // Notifications
        'notifications.title': 'Notifications',
        'notifications.markAllRead': 'Mark All as Read',
        'notifications.noNotifications': 'No notifications',
        'notifications.newAppointment': 'New appointment scheduled',
        'notifications.appointmentReminder': 'Appointment reminder',
        'notifications.prescriptionReady': 'Prescription ready for pickup',
        // Search
        'search.placeholder': 'Search...',
        'search.noResults': 'No results found',
        'search.searchResults': 'Search Results',
        'search.searchFor': 'Search for',
        // Filters
        'filter.all': 'All',
        'filter.active': 'Active',
        'filter.inactive': 'Inactive',
        'filter.pending': 'Pending',
        'filter.approved': 'Approved',
        'filter.rejected': 'Rejected',
        'filter.dateRange': 'Date Range',
        'filter.status': 'Status',
        'filter.category': 'Category',
        // Pagination
        'pagination.previous': 'Previous',
        'pagination.next': 'Next',
        'pagination.page': 'Page',
        'pagination.of': 'of',
        'pagination.showing': 'Showing',
        'pagination.results': 'results',
        // Health Metrics
        'health.bloodPressure': 'Blood Pressure',
        'health.heartRate': 'Heart Rate',
        'health.temperature': 'Temperature',
        'health.weight': 'Weight',
        'health.height': 'Height',
        'health.bmi': 'BMI',
        'health.lastUpdated': 'Last Updated',
        // Medical History
        'medical.history': 'Medical History',
        'medical.allergies': 'Allergies',
        'medical.medications': 'Current Medications',
        'medical.conditions': 'Medical Conditions',
        'medical.surgeries': 'Past Surgeries',
        'medical.familyHistory': 'Family History',
        // Prescriptions
        'prescription.title': 'Prescriptions',
        'prescription.medication': 'Medication',
        'prescription.dosage': 'Dosage',
        'prescription.frequency': 'Frequency',
        'prescription.duration': 'Duration',
        'prescription.instructions': 'Instructions',
        'prescription.prescribedBy': 'Prescribed By',
        'prescription.prescribedDate': 'Prescribed Date',
        irabaruta_logo: "Irabaruta Logo",
        nav: {
            home: "Home",
            services: "Services",
            departments: "Departments",
            about: "About",
            contact: "Contact",
            teleconsultation: "Teleconsultation",
            appointments: "Appointments",
            emergency: "Emergency",
            pharmacy: "Pharmacy",
            aiAssistant: "Meet Your AI Health Assistant",
            logout: "Logout",
            user: "User",
            patient: "Patient"
        },
        hero: {
            badge: "24/7 Healthcare Services",
            title: "Healthcare <span class='text-green-600'>Reimagined</span> for Rwanda",
            description: "ONE HEALTHLINE CONNECT brings advanced healthcare to your fingertips. Connect with specialists, book appointments, access emergency services, and manage your health journey—all in one platform.",
            cta_get_started: "Get Started",
            cta_emergency: "Emergency Assistance",
            users_count: "1,200+ Users",
            users_trust: "Trust our services",
            consultations_title: "Virtual Consultations",
            consultations_desc: "Connect with specialists from the comfort of your home",
            badge_new: "NEW",
            user1: "User 1",
            user2: "User 2",
            user3: "User 3",
            user4: "User 4",
            doctor_consulting_with_patient: "Doctor consulting with patient"
        },
        services: {
            title: "Our Services",
            subtitle: "Comprehensive healthcare services designed to meet all your medical needs",
            teleconsultation: {
                title: "Teleconsultation",
                desc: "Connect with specialists from various hospitals across Rwanda"
            },
            appointments: {
                title: "Appointments",
                desc: "Book and manage medical appointments with ease"
            },
            emergency: {
                title: "Emergency",
                desc: "24/7 emergency assistance services when you need it most"
            },
            pharmacy: {
                title: "Pharmacy",
                desc: "Order medications from local pharmacies with delivery options"
            },
            ai: {
                badge: "AI-Powered",
                title: "Meet Your AI Health Assistant",
                desc: "Our advanced AI system provides personalized health monitoring, lifestyle tips, medication reminders, and preliminary consultations. Get instant health advice anytime, anywhere.",
                features: {
                    monitoring: "Health Monitoring",
                    lifestyle: "Lifestyle Tips",
                    medication: "Medication Advice",
                    symptom: "Symptom Checker & Analysis"
                },
                cta: "Try AI Assistant"
            },
            learnMore: "Learn more"
        },
        departments: {
            title: "Medical Departments",
            subtitle: "Access specialized care across multiple medical fields from Rwanda's top specialists",
            list: {
                cardiology: "Cardiology",
                ophthalmology: "Ophthalmology",
                dentistry: "Dentistry",
                antenatal: "Antenatal",
                neurology: "Neurology",
                orthopedics: "Orthopedics"
            },
            viewAll: "View All Departments"
        },
        stats: {
            partnerHospitals: "Partner Hospitals",
            medicalSpecialists: "Medical Specialists",
            availability: "Availability",
            patientsServed: "Patients Served",
            partnerHospitalsCount: "10+",
            medicalSpecialistsCount: "50+",
            availabilityCount: "24/7",
            patientsServedCount: "5000+"
        },
        doctorsSection: {
            title: "Meet Our Specialists",
            description: "Our network includes Rwanda's top medical professionals ready to provide you with exceptional care",
            viewAll: "View all doctors",
            available: "Available Today",
            unavailable: "Unavailable",
            book: "Book",
            chat: "Chat",
            specialties: {
                cardiologist: "Cardiologist",
                pediatrician: "Pediatrician",
                neurologist: "Neurologist",
                dentist: "Dentist"
            },
            reviews: "reviews",
            doctor1: {
                name: "Dr. Jean Mugabo",
                specialty: "Cardiologist",
                hospital: "Kigali University Hospital",
                reviewsCount: 120,
                rating: 4.9
            },
            doctor2: {
                name: "Dr. Marie Uwase",
                specialty: "Pediatrician",
                hospital: "Rwanda Children's Hospital",
                reviewsCount: 120,
                rating: 4.9
            },
            doctor3: {
                name: "Dr. Eric Ndayishimiye",
                specialty: "Neurologist",
                hospital: "CHUK",
                reviewsCount: 120,
                rating: 4.9
            },
            doctor4: {
                name: "Claire Mutesi",
                specialty: "Dentist",
                hospital: "Gakwerere's Dental Clinic",
                reviewsCount: 120,
                rating: 4.9
            }
        },
        testimonials: {
            title: "What Our Patients Say",
            subtitle: "Real experiences from people who have transformed their healthcare journey with ONE HEALTHLINE CONNECT",
            roles: {
                mother: "Mother of two"
            },
            quotes: {
                1: "ONE HEALTHLINE CONNECT has transformed how my family accesses healthcare. The teleconsultation feature saved us hours of travel when my son had a fever. The doctor was able to diagnose and prescribe medication that was delivered to our home within hours."
            },
            prev: "Previous testimonial",
            next: "Next testimonial",
            goto: "Go to testimonial {{index}}"
        },
        cta: {
            title: "Download the ONE HEALTHLINE CONNECT App Now",
            description: "Take control of your health journey with our unified digital app. Access all services anytime, anywhere.",
            features: {
                access_24_7: "24/7 Doctor Services",
                book_appointments: "Book appointments with specialists",
                order_medications: "Order home-delivered medications",
                emergency_assistance: "Emergency assistance when you need it most",
                ai_health_monitoring: "Health monitoring and AI-driven advice"
            },
            download_ios: "Download on iOS",
            download_android: "Download on Android",
            app_image_alt: "ONE HEALTHLINE CONNECT App"
        },
        contact: {
            title: "Contact Us",
            description: "Have questions or need assistance? Our team is here to help you with any inquiries.",
            form: {
                title: "Send us a message",
                name_label: "Full Name",
                name_placeholder: "Your name",
                email_label: "Email Address",
                email_placeholder: "Your email",
                subject_label: "Subject",
                subject_placeholder: "How can we help you?",
                message_label: "Message",
                message_placeholder: "Your message",
                send_button: "Send Message"
            },
            info: {
                title: "Contact Information",
                location: {
                    title: "Our Location",
                    address: "KG 123 St, Kigali, Rwanda"
                },
                phone: {
                    title: "Phone Number",
                    main: "+250 788 123 456",
                    emergency: "Emergency: +250 788 999 911"
                },
                email: {
                    title: "Email Address",
                    main: "info@healthlinerwanda.com"
                }
            },
            hours: {
                title: "Working Hours",
                monday_friday: {
                    day: "Monday - Friday:",
                    time: "8:00 AM - 8:00 PM"
                },
                saturday: {
                    day: "Saturday:",
                    time: "9:00 AM - 6:00 PM"
                },
                sunday: {
                    day: "Sunday:",
                    time: "10:00 AM - 4:00 PM"
                },
                note: "* Emergency services available 24/7"
            }
        },
        logo: "Irabaruta Logo",
        footer: {
            description: "Transforming healthcare access in Rwanda through innovative digital solutions. Our mission is to make quality healthcare accessible to all Rwandans.",
            quickLinks: "Quick Links",
            services: "Our Services",
            support: "Support",
            contact: "Contact",
            privacyPolicy: "Privacy Policy",
            termsOfService: "Terms of Service",
            copyright: "All rights reserved.",
            nav: {
                home: "Home",
                about: "About",
                services: "Services",
                departments: "Departments",
                contact: "Contact",
                teleconsultation: "Teleconsultation",
                appointments: "Appointments",
                emergency: "Emergency",
                pharmacy: "Pharmacy",
                aiAssistant: "AI Health Assistant"
            },
            faq: "FAQ"
        },
        servicesHero: {
            title: "Our <span class='text-green-600'>Healthcare</span> Services",
            description: "Comprehensive healthcare solutions designed to meet your needs, accessible anytime, anywhere in Rwanda.",
            getStarted: "Get Started",
            viewPricing: "View Pricing",
            imageAlt: "ONE HEALTHLINE CONNECT Services",
            coreServices: {
                title: "5 Core Services",
                description: "Designed for the Rwandan healthcare landscape"
            },
            badges: {
                support: "24/7 Support",
                coverage: "Nationwide Coverage"
            }
        },
        servicesOverview: {
            title: "Our Services at a Glance",
            description: "ONE HEALTHLINE CONNECT offers a comprehensive suite of healthcare services designed to meet the diverse needs of our users",
            learnMore: "Learn more"
        },
        services: {
            teleconsultation: {
                title: "Teleconsultation",
                description: "Virtual consultations with healthcare professionals from various hospitals"
            },
            appointments: {
                title: "Appointments",
                description: "Schedule in-person or virtual appointments with specialists"
            },
            emergency: {
                title: "Emergency",
                description: "24/7 emergency assistance and ambulance dispatch"
            },
            pharmacy: {
                title: "Pharmacy",
                description: "Order medications from partner pharmacies with delivery options"
            },
            ai: {
                title: "AI Health Assistant",
                description: "Personalized health monitoring, advice, and guidance"
            }
        },
        "hero": {
            "label": "Teleconsultation Service",
            "title": "Connect with Healthcare Professionals from Home",
            "subtitle": "Our teleconsultation service connects you with qualified healthcare professionals from various hospitals across Rwanda."
        },
        "features": {
            "consultations": "Consultations with specialists from multiple hospitals",
            "high_quality_video": "High-quality video and audio calls",
            "secure_messaging": "Secure messaging with healthcare providers",
            "digital_prescriptions": "Digital prescription services",
            "medical_records": "Medical record access and sharing",
            "followup_scheduling": "Follow-up appointment scheduling"
        },
        "steps": {
            "title": "How Teleconsultation Works",
            "select_hospital": "Select Hospital/Clinic",
            "select_hospital_desc": "Choose from our partner healthcare providers",
            "choose_type": "Choose Consultation Type",
            "choose_type_desc": "General or Specialist consultation",
            "select_insurance": "Select Insurance",
            "select_insurance_desc": "Choose your payment method",
            "register_details": "Register Patient Details",
            "register_details_desc": "Fill in your information",
            "pay_fee": "Pay Consultation Fee",
            "pay_fee_desc": "Via Bank Transfer or USSD",
            "attend_consultation": "Attend Your Consultation",
            "attend_consultation_desc": "Secure video or phone call",
            "receive_followup": "Receive Follow-Up",
            "receive_followup_desc": "Digital prescription and referrals",
            "review_history": "Review Medical History",
            "review_history_desc": "Access your medical records"
        },
        "specialties": {
            "title": "Available Specialties",
            "general_medicine": "General Medicine",
            "pediatrics": "Pediatrics",
            "cardiology": "Cardiology",
            "dermatology": "Dermatology",
            "psychiatry": "Psychiatry",
            "nutrition": "Nutrition"
        },
        "availability": {
            "by_appointment": "By appointment"
        },
        "buttons": {
            "start_consultation": "Start Consultation",
            "view_records": "View Medical Records"
        },
        "partners": {
            "title": "Our Partner Healthcare Providers"
        },
        "cta": {
            "title": "Ready to Start Your Consultation?",
            "subtitle": "Join thousands of Rwandans accessing quality healthcare from home",
            "button": "Book Consultation Now"
        },
        missionVision: {
            mission: {
                title: "Our Mission",
                description: "To revolutionize healthcare delivery in Rwanda by providing accessible, affordable, and high-quality healthcare services through innovative digital solutions. We aim to connect patients with healthcare providers seamlessly, ensuring that every Rwandan has access to the care they need, when they need it."
            },
            vision: {
                title: "Our Vision",
                description: "To be the leading digital healthcare platform in Rwanda and East Africa, creating a healthcare ecosystem where technology bridges the gap between patients and healthcare providers. We envision a future where every Rwandan, regardless of location or economic status, has equal access to quality healthcare services."
            }
        },
        services: {
            title: "Services",
            subtitle: "Phone",
            teleconsultation: {
                desc: "Consult with doctors remotely using our teleconsultation service."
            },
            learnMore: "Learn More",
            appointments: {
                desc: "Book appointments easily with healthcare professionals."
            },
            emergency: {
                desc: "Access emergency medical assistance anytime."
            },
            pharmacy: {
                desc: "Order medications conveniently through our pharmacy services."
            },
            ai: {
                badge: "Meet Your AI Health Assistant",
                desc: "Our AI helps you monitor health, lifestyle, medications, and symptoms.",
                features: {
                    monitoring: "Health Monitoring",
                    lifestyle: "Lifestyle Advice",
                    medication: "Medication Reminders",
                    symptom: "Symptom Checker"
                },
                cta: "Discover AI Assistance"
            }
        },
        "departments2": {
            "title": "Services Across Departments",
            "description": "ONE HEALTHLINE CONNECT offers a comprehensive range of healthcare services through our various departments",
            "diagnostic": {
                "title": "Diagnostic Services",
                "services": {
                    "imaging": "Advanced Medical Imaging (X-ray, CT, MRI)",
                    "laboratory": "Laboratory Testing",
                    "ecg": "Electrocardiogram (ECG/EKG)",
                    "ultrasound": "Ultrasound",
                    "endoscopy": "Endoscopy",
                    "biopsy": "Biopsy"
                }
            },
            "treatment": {
                "title": "Treatment Services",
                "services": {
                    "medication": "Medication Management",
                    "surgery": "Surgical Procedures",
                    "physicalTherapy": "Physical Therapy",
                    "radiation": "Radiation Therapy",
                    "chemotherapy": "Chemotherapy",
                    "rehab": "Rehabilitation Services"
                }
            },
            "preventive": {
                "title": "Preventive Care",
                "services": {
                    "screenings": "Health Screenings",
                    "vaccinations": "Vaccinations",
                    "checkups": "Wellness Check-ups",
                    "nutrition": "Nutritional Counseling",
                    "lifestyle": "Lifestyle Modification Programs",
                    "education": "Preventive Education"
                }
            },
            "specialized": {
                "title": "Specialized Care",
                "services": {
                    "chronic": "Chronic Disease Management",
                    "maternal": "Maternal and Child Health",
                    "geriatric": "Geriatric Care",
                    "mental": "Mental Health Services",
                    "pain": "Pain Management",
                    "emergency": "Emergency Care"
                }
            }
        },
        "conditions": {
            "title": "Conditions We Treat",
            "subtitle": "Our departments are equipped to diagnose and treat a wide range of medical conditions",
            "viewMore": "View More",
            "cardiology": {
                "title": "Cardiology",
                "hypertension": "Hypertension",
                "coronaryArteryDisease": "Coronary Artery Disease",
                "heartFailure": "Heart Failure",
                "arrhythmias": "Arrhythmias",
                "valvularHeartDisease": "Valvular Heart Disease"
            },
            "neurology": {
                "title": "Neurology",
                "stroke": "Stroke",
                "epilepsy": "Epilepsy",
                "parkinsons": "Parkinson's Disease",
                "multipleSclerosis": "Multiple Sclerosis",
                "migraine": "Migraine"
            },
            "orthopedics": {
                "title": "Orthopedics",
                "arthritis": "Arthritis",
                "fractures": "Fractures",
                "jointPain": "Joint Pain",
                "osteoporosis": "Osteoporosis",
                "sportsInjuries": "Sports Injuries"
            },
            "dermatology": {
                "title": "Dermatology",
                "eczema": "Eczema",
                "psoriasis": "Psoriasis",
                "acne": "Acne",
                "skinCancer": "Skin Cancer",
                "fungalInfections": "Fungal Infections"
            },
            "gastroenterology": {
                "title": "Gastroenterology",
                "gerd": "GERD",
                "ibs": "Irritable Bowel Syndrome",
                "ulcerativeColitis": "Ulcerative Colitis",
                "crohnsDisease": "Crohn's Disease",
                "hepatitis": "Hepatitis"
            },
            "endocrinology": {
                "title": "Endocrinology",
                "diabetes": "Diabetes",
                "thyroidDisorders": "Thyroid Disorders",
                "hormonalImbalances": "Hormonal Imbalances",
                "osteoporosis": "Osteoporosis",
                "adrenalDisorders": "Adrenal Disorders"
            },
            "pulmonology": {
                "title": "Pulmonology",
                "asthma": "Asthma",
                "copd": "COPD",
                "pneumonia": "Pneumonia",
                "tuberculosis": "Tuberculosis",
                "sleepApnea": "Sleep Apnea"
            },
            "gynecology": {
                "title": "Gynecology",
                "menstrualDisorders": "Menstrual Disorders",
                "endometriosis": "Endometriosis",
                "pcos": "PCOS",
                "fibroids": "Fibroids",
                "infertility": "Infertility"
            }
        }
    },
    rw: {
        "patient": {
            "dashboard": {
                "title": "Patient Dashboard",
                "title_rw": "Ikibaho cy’Umurwayi",
                "subtitle": "Manage your health and appointments",
                "subtitle_rw": "Genza ubuzima bwawe n’amasaha yo kugana muganga",
                "quickStats": {
                    "upcomingAppointments": "Upcoming Appointments",
                    "upcomingAppointments_rw": "Amasaha ateganyijwe yo kugana muganga",
                    "activePrescriptions": "Active Prescriptions",
                    "activePrescriptions_rw": "Imiti iri gukoreshwa",
                    "healthScore": "Health Score",
                    "healthScore_rw": "Ijanisha ry’ubuzima"
                },
                "quickActions": {
                    "bookAppointment": {
                        "title": "Book Appointment",
                        "title_rw": "Tegura igihe cyo kugana muganga",
                        "description": "Schedule a visit with your healthcare provider",
                        "description_rw": "Tegura igihe cyo kugana muganga wawe"
                    },
                    "teleconsultation": {
                        "title": "Teleconsultation",
                        "title_rw": "Kugisha inama hifashishijwe ikoranabuhanga",
                        "description": "Connect with doctors virtually",
                        "description_rw": "Vugana na muganga ukoresheje ikoranabuhanga"
                    },
                    "pharmacyOrders": {
                        "title": "Pharmacy Orders",
                        "title_rw": "Gutumiza imiti",
                        "description": "Order medications from partner pharmacies",
                        "description_rw": "Tuma imiti iva muri farumasi zacu zifatanyije"
                    },
                    "emergencyRequest": {
                        "title": "Emergency Request",
                        "title_rw": "Gusaba ubufasha bwihuse",
                        "description": "Request immediate medical assistance",
                        "description_rw": "Saba ubufasha bw’ubuvuzi bwihuse"
                    },
                    "medicalHistory": {
                        "title": "Medical History",
                        "title_rw": "Amateka y’ubuvuzi",
                        "description": "View your complete medical records",
                        "description_rw": "Reba amakuru yose yerekeranye n’ubuzima bwawe"
                    },
                    "aiHealthAssistant": {
                        "title": "AI Health Assistant",
                        "title_rw": "Umufasha w’ubuzima wa AI",
                        "description": "Get health advice and symptom checker",
                        "description_rw": "Fata inama z’ubuzima n’ukurikirana ibimenyetso"
                    }
                },
                "recentActivity": {
                    "title": "Recent Activity",
                    "title_rw": "Ibikorwa bishya",
                    "appointment": {
                        "title": "Appointment with Dr. Smith",
                        "title_rw": "Igihe cyo kugana Dr. Smith",
                        "time": "Tomorrow at 2:00 PM",
                        "time_rw": "Ejo saa munani za mu gitondo"
                    },
                    "prescription": {
                        "title": "Prescription filled",
                        "title_rw": "Imiti yatanzwe",
                        "status": "Medication ready for pickup",
                        "status_rw": "Imiti iriteguye gukurwaho"
                    }
                }
            },
            "menu": {
                "dashboard": "Ahabanza",
                "bookAppointment": "Tegura Igenzura",
                "teleconsultation": "Kuganira na Muganga Online",
                "pharmacyOrders": "Ibikoresho By’Ubuvuzi",
                "aiAssistant": "Umufasha wa AI",
                "emergency": "Ibyihutirwa",
                "history": "Amateka"
            },
            "header": {
                "panel": "Agace k'Umurwayi"
            },
            "user": {
                "role": "Umurwayi"
            }
        },
        "nav": {
            "logout": "Sohoka"
        },
        "register": {
            "title": "Iyandikishe",
            "description": "Injira muri ONE HEALTHLINE CONNECT uyu munsi",
            "labels": {
                "fullName": "Amazina yose",
                "email": "Imeyili",
                "password": "Ijambobanga",
                "confirmPassword": "Emeza ijambobanga",
                "accountType": "Ubwoko bw'Konti"
            },
            "placeholders": {
                "fullName": "Andika amazina yawe yose",
                "email": "Andika imeyili yawe",
                "password": "Andika ijambobanga ryawe",
                "confirmPassword": "Emeza ijambobanga ryawe"
            },
            "roles": {
                "patient": "Umurwayi",
                "doctor": "Muganga",
                "admin": "Umuyobozi"
            },
            "buttons": {
                "createAccount": "Iyandikishe",
                "creatingAccount": "Turimo kwiyandikisha...",
                "signIn": "Injira"
            },
            "alreadyHaveAccount": "Ufite konti?",
            "errors": {
                "passwordMismatch": "Amafaranga y'ijambobanga ntahura",
                "passwordTooShort": "Ijambobanga rigomba kuba rifite nibura inyuguti 6",
                "registrationFailed": "Iyandikishirizwa ryananiranye. Ongera ugerageze."
            }
        },
        "loginForm": {
            "title": "Murakaza Neza",
            "description": "Injira muri konti yawe ya ONE HEALTHLINE CONNECT",
            "emailLabel": "Imeyili",
            "emailPlaceholder": "Andika aderesi imeyili yawe",
            "passwordLabel": "Ijambo ry'ibanga",
            "passwordPlaceholder": "Andika ijambo ry'ibanga ryawe",
            "signIn": "Injira",
            "signingIn": "Kwinjira...",
            "noAccount": "Nta konti ufite?",
            "signUp": "Iyandikishe",
            "errorFallback": "Kwinjira byanze. Gerageza kongera."
        },
        "contactCta": {
            "heading": "Guma uhuze na ONE HEALTHLINE CONNECT",
            "description": "Kuramo porogaramu yacu kugirango ubone serivisi zacu vuba, uganire n’ikipe yacu, kandi ucunge ubuzima bwawe aho uri hose.",
            "downloadApp": "Kuramo Porogaramu Yacu",
            "liveChat": "Ubufasha bwo Kuvugana Ako kanya",
            "callUs": "Tuhamagare Ubu",
            "socialFollow": "Dukurikire ku mbuga nkoranyambaga kugira ngo ubone amakuru, inama z’ubuzima, n’ibindi"
        },
        "social": {
            "facebook": "Facebook",
            "twitter": "Twitter",
            "instagram": "Instagram",
            "youtube": "YouTube"
        },
        "faq2": {
            "heading": "Ibibazo Bikunze Kubazwa",
            "description": "Shaka ibisubizo by’ibibazo bisanzwe bijyanye no kuvugana na ONE HEALTHLINE CONNECT",
            "items": [
                {
                    "question": "Ni gute nagera kuri ONE HEALTHLINE CONNECT?",
                    "answer": "Waduhamagara kuri telefoni (+250 788 123 456), ukatwandikira kuri email (info@healthlinerwanda.com), ukoresheje ifishi yo kuvugana kuri website yacu, cyangwa ukoresheje ubutumwa bwo muri porogaramu yacu ya telefoni. Mu bihe byihutirwa, ukoresha umurongo wihutirwa wa telefoni (+250 788 999 911) cyangwa 'Emergency Assistance' muri porogaramu."
                },
                {
                    "question": "Nzahabwa igisubizo ryihuse ry’ikihe gihe?",
                    "answer": "Ku bibazo bisanzwe binyuzwa kuri ifishi yo kuvugana cyangwa email, dushaka gusubiza mu masaha 24 mu minsi y'akazi. Ibitumanaho kuri telefoni bisubizwa ako kanya mu masaha y'akazi. Ku bibazo byihutirwa by’ubuvuzi, ukoresha umurongo wihutirwa ku buryo bwihuse."
                },
                {
                    "question": "Nshobora kuza ku biro byanyu ntategetse gahunda?",
                    "answer": "Yego, ushobora kuza ku biro byacu mu masaha y'akazi usaba ubufasha cyangwa gusobanukirwa na porogaramu yacu. Ariko, ku nama cyangwa ibiganiro byimbitse, turasaba ko utegura gahunda mbere kugirango abakozi babigenewe baboneke."
                },
                {
                    "question": "Nakora nte ngo ntange ibitekerezo ku mikorere yanyu?",
                    "answer": "Twishimira kwakira ibitekerezo byawe! Ushobora gutanga ibitekerezo ukoresheje ifishi yo kuvugana (hitamo 'Feedback' mu gice cy’akazi), ukatwandikira kuri email feedback@healthlinerwanda.com, cyangwa ukoresheje uburyo bwo gutanga ibitekerezo muri porogaramu yacu ya telefoni. Ibi bidufasha kunoza serivisi zacu."
                },
                {
                    "question": "Nganira nde mu gihe mfite ibibazo bya tekinike kuri porogaramu?",
                    "answer": "Ku bibazo bya tekinike muri porogaramu ya ONE HEALTHLINE CONNECT, hamagara itsinda ryacu rya tekinike kuri support@healthlinerwanda.com cyangwa +250 788 123 456 ukavamo guhitamo serivisi za tekinike. Ushobora kandi kohereza itike yo gusaba ubufasha ukoresheje ifishi yo kuvugana ukavamo 'Technical Support'."
                },
                {
                    "question": "Nakora nte ngo menyeshe ikibazo cyihutirwa?",
                    "answer": "Mu bihe by'amage yihutirwa, hamagara umurongo wacu wa telefoni 24/7 kuri +250 788 999 911 cyangwa ukoreshe 'Emergency Assistance' muri porogaramu ya ONE HEALTHLINE CONNECT. Itsinda ryacu rizakugira inama no kohereza ubufasha bwihuse."
                }
            ]
        },
        "contactLocations": {
            "heading": "Ahantu Hacu",
            "description": "Sura imwe mu nzu zacu kugira ngo ubone ubufasha bw’umwihariko ku bikorwa by’ubuvuzi",
            "viewOnMap": "Reba ku Ikarita",
            "locations": {
                "1": {
                    "name": "Ibiro Bikuru bya ONE HEALTHLINE CONNECT",
                    "address": "KG 123 St, Kigali, Rwanda",
                    "phone": "+250 788 123 456"
                },
                "2": {
                    "name": "Ishami rya Butaro",
                    "address": "Hafi ya Butaro Hospital, Akarere ka Burera, Rwanda",
                    "phone": "+250 788 234 567"
                },
                "3": {
                    "name": "Ikigo cya Muhima",
                    "address": "KN 2 Ave, Muhima, Kigali, Rwanda",
                    "phone": "+250 788 345 678"
                }
            }
        },
        "contactInfo": {
            "heading": "Amakuru y'Itumanaho",
            "description": "Twandikire ukoresheje bumwe muri ubu buryo bwose kugira ngo ubone ubufasha ku bijyanye na serivisi zacu z'ubuvuzi",
            "cards": {
                "location": {
                    "title": "Aho Turi",
                    "details": [
                        "KG 123 St, Kigali",
                        "Rwanda"
                    ]
                },
                "phone": {
                    "title": "Numero za Telefoni",
                    "details": [
                        "+250 788 123 456",
                        "Icyihutirwa: +250 788 999 911"
                    ]
                },
                "email": {
                    "title": "Aderesi za Email",
                    "details": [
                        "info@healthlinerwanda.com",
                        "support@healthlinerwanda.com"
                    ]
                },
                "hours": {
                    "title": "Amasaha yo Gukora",
                    "details": [
                        "Kuwa Mbere-Kuwa Gatanu: 8:00 AM - 8:00 PM",
                        "Kuwa Gatandatu-Kuwa Mungu: 9:00 AM - 5:00 PM"
                    ],
                    "footer": "* Serivisi z'ibanze zihari amasaha 24/7"
                }
            },
            "emergency": {
                "title": "Itumanaho ry’Ibyihutirwa",
                "desc": "Mu gihe cy'ibyihutirwa by'ubuvuzi, hamagara umurongo wacu wa 24/7 cyangwa ukoresheje uburyo bwo gufasha mu buryo bwihutirwa muri porogaramu ya ONE HEALTHLINE CONNECT.",
                "hotline": "Umurongo w’Ibyihutirwa: +250 788 999 911"
            }
        },
        "contactForm": {
            "heading": "Twandikire Ubutumwa",
            "description": "Sobanura ibikenewe hasi maze itsinda ryacu rigusubize vuba bishoboka",
            "labels": {
                "name": "Amazina Yuzuye",
                "email": "Imeli",
                "phone": "Numero ya Telefone",
                "department": "Ishami",
                "subject": "Ingingo",
                "message": "Ubutumwa",
                "privacy": "Nemera {privacyPolicy} no kwemera ko amakuru yanjye akoreshwa."
            },
            "placeholders": {
                "name": "Amazina yawe",
                "email": "Imeli yawe",
                "phone": "Numero ya telefone yawe",
                "subject": "Twabafasha dute?",
                "message": "Sobanura ibikenewe muri iki kibazo..."
            },
            "departments": {
                "general": "Ibibazo rusange",
                "appointments": "Gahunda z’inama",
                "billing": "Kwishyura & Ubwishingizi",
                "technical": "Ubufasha bwa tekiniki",
                "feedback": "Ibyifuzo"
            },
            "privacyPolicy": "Politiki y’Ubuzima Bwite",
            "privacyLink": "/privacy",
            "required": "*",
            "successTitle": "Ubutumwa bwoherejwe neza!",
            "successMessage": "Murakoze kutwandikira. Itsinda ryacu rizagusubiza bidatinze.",
            "sendMessage": "Ohereza Ubutumwa",
            "sending": "Kohereza..."
        },
        "contactHero": {
            "heading": "Twandikire tukurebereho {highlight}",
            "highlight": "Byihuse",
            "description": "Ufite ibibazo cyangwa ukeneye ubufasha? Itsinda ryacu rirahari kugufasha ku bibazo byose bijyanye na serivisi zacu z’ubuvuzi.",
            "badge1": "Ubufasha bwa 24/7 burahari",
            "badge2": "Imiyoboro myinshi yo kutugezaho",
            "overlayTitle": "Turi Hano Kugufasha",
            "overlayDesc": "Twandikire uko ubishaka",
            "badgeFloating1": "Ibisubizo Byihuse",
            "badgeFloating2": "Ubufasha Bunyamwuga"
        },
        "aboutCta": {
            "heading": "Duhuze Imbaraga mu Guhindura Ubuvuzi mu Rwanda",
            "description": "Niba uri umurwayi ushaka ubuvuzi, umujyanama w’ubuvuzi wifuza kugera kure, cyangwa umuryango ushaka gufatanya natwe, turagutumiye kuba igice cy’urugendo rwacu.",
            "downloadButton": "Kuramo Porogaramu yacu",
            "contactButton": "Twandikire"
        },
        "achievements": {
            "heading": "Ibikorwa n’Ibyagezweho",
            "subheading": "Urugendo rwacu rw’iterambere n’ingaruka mu buvuzi mu Rwanda",
            "milestonesTitle": "Urugendo rwacu",
            "awardsTitle": "Ibihembo n’Icyubahiro",
            "milestones": [
                {
                    "year": "2023",
                    "title": "Hashinzwe ONE HEALTHLINE CONNECT",
                    "description": "Yatangijwe n’intego yo guhindura uburyo bwo kugera ku buvuzi mu Rwanda."
                },
                {
                    "year": "2023",
                    "title": "Ubufatanye bwa Mbere na Ibitaro",
                    "description": "Twagiranye ubufatanye na Kigali University Hospital mu gutanga serivisi za teleconsultation."
                },
                {
                    "year": "2024",
                    "title": "Gushyira ku Isoko Porogaramu ya Telefone",
                    "description": "Twasohoye porogaramu yacu ya mobile kuri iOS na Android."
                },
                {
                    "year": "2024",
                    "title": "Umufasha w’ubuzima wifashisha AI",
                    "description": "Twazanye sisitemu yacu ikoreshwa na AI mu kugenzura ubuzima no gutanga inama."
                },
                {
                    "year": "2024",
                    "title": "Kwagura ku Bitaro 10",
                    "description": "Twongereye umubare w’ibitaro bikorana natwe kugeza ku 10 mu Rwanda hose."
                },
                {
                    "year": "2025",
                    "title": "Abakoresha 5,000 Bagezweho",
                    "description": "Twizihije kugera ku bakoresha 5,000 banditse ku rubuga rwacu."
                }
            ],
            "awards": [
                {
                    "title": "Igihembo cy’Ikoranabuhanga mu Rwanda",
                    "year": "2024",
                    "description": "Twashimwe kubera uburyo bugezweho dukoresha mu gutanga serivisi z’ubuvuzi."
                },
                {
                    "title": "Igisubizo Cyiza mu Buvuzi bw’Ikoranabuhanga",
                    "year": "2024",
                    "description": "Twahawe n’Ikigo cy’Igihugu cy’Ikoranabuhanga mu Itumanaho."
                },
                {
                    "title": "Ikigo cy'Ubuvuzi Cyatangije Umushinga w'Umwaka",
                    "year": "2024",
                    "description": "Twahiriwe nka startup itangiza ubuvuzi y’indashyikirwa n’Ikinyamakuru cy’Ubucuruzi mu Rwanda."
                },
                {
                    "title": "Igihembo cy’Ingaruka ku Muryango",
                    "year": "2025",
                    "description": "Twashimwe ku musanzu wacu mu kunoza uburyo bwo kugera ku buvuzi mu bice by'icyaro."
                }
            ]
        },
        "partners1": {
            "heading": "Abafatanyabikorwa bacu",
            "subheading": "Dukorana n’abatanga serivisi z’ubuvuzi n’imiryango itandukanye mu gutanga ubuvuzi bufite ireme"
        },
        "ourTeam": {
            "heading": "Itsinda ry’Abayobozi",
            "subheading": "Umenyere abahanga b’inzobere baharanira guhindura ubuvuzi muri ONE HEALTHLINE CONNECT",
            "roles": {
                "founder": "Umushinga n’Umuyobozi Mukuru",
                "cto": "Umuyobozi Mukuru wa Tekinoloji",
                "cmo": "Umuyobozi Mukuru w’Ubuvuzi"
            },
            "bios": {
                "charles": "Umuganga w’umutima ufite imyaka myinshi y'uburambe ({years}). Akunda gukoresha ikoranabuhanga mu kunoza serivisi z’ubuvuzi.",
                "urban": "Uwari injeniyeri muri Google ufite ubumenyi mu bwenge bw’ubukorano na porogaramu za telefone. Yayoboye iterambere ry’urubuga rwacu rw’ingenzi.",
                "willy": "Umuyobozi w’inyubako y’ubuvuzi ufite uburambe, ureberera ubufatanye bwacu n’abaganga kandi wita ku ireme rya serivisi."
            }
        },
        "coreValues": {
            "heading": "Indangagaciro zacu",
            "subtitle": "Amafaranga adushoboza gukora umurimo wacu no kuyobora uburyo dukora ubuvuzi",
            "compassion": {
                "title": "Impuhwe",
                "description": "Twegereza ubuvuzi dufite impuhwe no kumva neza, tumenya ko buri murwayi afite ibyo akeneye n’ibibazo bye."
            },
            "integrity": {
                "title": "Ubunyangamugayo",
                "description": "Dukora dushyira imbere amahame y’ubunyangamugayo muri byose, twita ku buzima bw’abakiriya bacu, umutekano wabo, n’ukuri mu makuru."
            },
            "inclusivity": {
                "title": "Kwishyira hamwe",
                "description": "Duharanira ko ubuvuzi bugera kuri buri Munyarwanda, aho yaba atuye hose, uko amerewe kose, cyangwa inkomoko ye."
            },
            "innovation": {
                "title": "Udushya",
                "description": "Duhora dushaka uburyo bushya kandi bwiza bwo gutanga serivisi z’ubuvuzi, dukoresheje ikoranabuhanga mu gukemura ibibazo."
            },
            "excellence": {
                "title": "Ubuhanga",
                "description": "Duharanira ubuhanga mu byo dukora byose, kuva ku rwego rw’urubuga rwacu kugeza ku murimo dutanga ku bakiriya bacu."
            },
            "community": {
                "title": "Umuryango",
                "description": "Twemera imbaraga z’umuryango kandi dukorana n’abatanga serivisi z’ubuvuzi mu gace kacu kugira ngo duteze imbere sisitemu y’ubuvuzi."
            }
        },
        "ourStory1": {
            "heading": "Inkuru yacu",
            "subheading": "Urugendo rwa ONE HEALTHLINE CONNECT kuva ku gitekerezo kugera ku rubuga nyamukuru rw'ubuvuzi mu Rwanda",
            "beginning": {
                "title": "Itangiriro",
                "text": "ONE HEALTHLINE CONNECT yavutse mu bunararibonye bw’umushinga wacu, Dr. Jean Mugabo, wabonye imbogamizi abaturage bo mu cyaro bahura nazo mu kubona ubuvuzi bufite ireme. Nyuma yo kubura umwe mu muryango we kubera gutinda kwa serivisi z’ubuvuzi, yiyemeje gushaka igisubizo cyafasha guhuza abarwayi n’abaganga."
            },
            "challenge": {
                "title": "Icyibazo",
                "text": "Mu Rwanda, abantu benshi baracyahura n’imbogamizi zo kubona serivisi z’ubuvuzi bitewe n’imiterere y’ahatuye, ubushobozi buke, n’ubuke bw’abaganga. Ibi cyane cyane ku batuye mu cyaro, bakenera kugenda intera ndende kugera ku kigo nderabuzima."
            },
            "solution": {
                "title": "Igisubizo",
                "text": "Dushingiye ku gukwirakwira kwa telefoni ngendanwa mu Rwanda, twakoze urubuga rwa digitale ruhuza abarwayi n’abaganga, rubemerera kugisha inama, kwiyandikisha, gutumiza imiti, no kubona ubufasha bwihutirwa — byose bakoresheje telefone zabo. Twanashyizeho ubwenge bw’ubukorano butanga ubujyanama bwihariye mu buzima."
            },
            "today": {
                "title": "Uyu munsi",
                "text": "Uyu munsi, ONE HEALTHLINE CONNECT itanga serivisi ku barwayi ibihumbi mu gihugu hose, ifatanya n’ibitaro, amavuriro, n’amafamasi akomeye, itanga serivisi z’ubuvuzi zifatika. Itsinda ryacu ryagutse rikubiyemo abaganga, abahanga mu ikoranabuhanga, n’abayobozi b’ubucuruzi, bose bafite intego imwe yo guteza imbere ubuvuzi mu Rwanda."
            },
            "images": {
                "foundingTeamAlt": "Itsinda ry’abashinze",
                "firstOfficeAlt": "Ibiro bya mbere",
                "earlyPrototypeAlt": "Icyitegererezo cya mbere",
                "currentTeamAlt": "Itsinda ririho ubu"
            }
        },
        "cta1": {
            "title": "Ukeneye Ubuvuzi Bwihariye?",
            "subtitle": "Hura n’inzobere zacu mu mashami atandukanye kugira ngo ugirwe inama no kuvurwa hakurikijwe ibyo ukeneye.",
            "book": "Teganya Gahunda n’Inzobere",
            "emergency": "Ubufasha bw’Ubutabazi",
            "notSure": "Ntizi neza ishami ukeneye?",
            "symptomChecker": "Gerageza isuzuma rya bimenyetso"
        },
        "faq1": {
            "title": "Ibibazo Bikunze Kubazwa",
            "subtitle": "Shakisha ibisubizo ku bibazo bikunze kubazwa ku mashami yacu n'inzobere",
            "q1": "Nigute menya ishami ngomba gusura?",
            "a1": "Niba utizeye ishami ukeneye, tangirira ku muganga rusange ushobora kugusuzuma akaguhitiramo inzobere ikwiye. Ushobora kandi gukoresha AI Health Assistant iri muri porogaramu yacu kugira ngo uguhuze n’ishami rikwiye hashingiwe ku bimenyetso byawe. Mu gihe cy'ibyago bikomeye, ukoreshe serivisi zacu z'ubutabazi.",
            "q2": "Nshobora gusaba muganga runaka mu ishami?",
            "a2": "Yego, ushobora gusaba muganga runaka igihe uteganya gahunda. Urubuga rwacu rukwemerera kureba inzobere ziri mu ishami, gusoma umwirondoro wabo, amanota bahawe, igihe baboneka, no guhitamo uwo ukunda. Ariko, igihe cyo kuboneka gishobora gutandukana bitewe n'imirimo yabo.",
            "q3": "Ni iki ngomba kuzana mu gihe mfite gahunda yo mu ishami?",
            "a3": "Mu gihe cya gahunda yawe, uzane indangamuntu yawe, amakuru ya ubwishingizi (niba ari ngombwa), urutonde rw’imiti urimo gufata, inyandiko zose z’ubuvuzi cyangwa ibisubizo by’ibipimo, ndetse n’urwandiko rw’ibibazo cyangwa impungenge wifuza kuganiraho. Ku nama za kure, menya ko ufite interineti yihuta kandi ahantu hatuje kandi hihariye.",
            "q4": "Gahunda isanzwe yo kubonana n'inzobere imara igihe kingana iki?",
            "a4": "Igihe gitandukanye bitewe n’ishami n’impamvu y'urugendo rwawe. Guhura bwa mbere bimara iminota 30-45, naho gahunda zo gukurikiraho zimara iminota 15-30. Ibibazo bigoye bishobora gufata igihe kirekire. Igihe giteganyijwe kizerekanwa igihe uteganya gahunda yawe.",
            "q5": "Nshobora kubona igitekerezo cya kabiri ku nzobere imwe mu ishami rimwe?",
            "a5": "Yego, dushyigikira abarwayi gushaka ibitekerezo bya kabiri igihe babona ari ngombwa. Ushobora guteganya gahunda n’indi nzobere mu ishami rimwe ukoresheje urubuga rwacu. Inyandiko zawe z’ubuvuzi zishobora gusangirwa hagati y’abatanga serivisi niba ubihaye uburenganzira.",
            "q6": "Ese amashami yose atanga serivisi zo kuganira kuri interineti?",
            "a6": "Amashami menshi atanga uburyo bwo kuganira kuri interineti, ariko zimwe mu ndwara zisaba kujya ku ivuriro kugira ngo zibone ibisubizo nyabyo. Igihe uteganya gahunda, uzabona ubwoko bw’ibiganiro buboneka kuri buri shami n'inzobere. Amwe mu mashami ashobora gutangira ibiganiro kuri interineti, hanyuma ugakomeza kuganira mu buryo bwo guhura imbona nkubone niba ari ngombwa."
        },
        "conditions": {
            "title": "Indwara Duvura",
            "subtitle": "Amashami yacu afite ubushobozi bwo gusuzuma no kuvura indwara zitandukanye",
            "viewMore": "Reba Byinshi",
            "cardiology": {
                "title": "Indwara z'Umutima",
                "hypertension": "Umuvuduko w'amaraso uri hejuru",
                "coronaryArteryDisease": "Indwara y'imitsi y'umutima",
                "heartFailure": "Kunanirwa k'umutima",
                "arrhythmias": "Kudakubitana k'umutima neza",
                "valvularHeartDisease": "Indwara z'udufunguzo tw'umutima"
            },
            "neurology": {
                "title": "Indwara z'Ubuyoborantimba",
                "stroke": "Guhagarara k'ubwonko",
                "epilepsy": "Igituntu cy’ubwonko (Epilepsie)",
                "parkinsons": "Indwara ya Parkinson",
                "multipleSclerosis": "Multiple Sclerosis",
                "migraine": "Uburibwe bw'umutwe bukabije"
            },
            "orthopedics": {
                "title": "Indwara z'Imikaya n'Amagufa",
                "arthritis": "Kubabara imitsi y'amagufa (Arthritis)",
                "fractures": "Kuvunika",
                "jointPain": "Kubabara mu ngingo",
                "osteoporosis": "Kunanuka kw'amagufa",
                "sportsInjuries": "Ibikomere by'imikino"
            },
            "dermatology": {
                "title": "Indwara z'uruhu",
                "eczema": "Uruhu rukakaye (Eczema)",
                "psoriasis": "Psoriasis",
                "acne": "Uruhu rufite uduheri (Acne)",
                "skinCancer": "Kanseri y'uruhu",
                "fungalInfections": "Indwara ziterwa n'ububore"
            },
            "gastroenterology": {
                "title": "Indwara z'Igifu n'Amara",
                "gerd": "Indwara y'inyuma y'igifu (GERD)",
                "ibs": "Indwara y'amara (IBS)",
                "ulcerativeColitis": "Ulcerative Colitis",
                "crohnsDisease": "Indwara ya Crohn",
                "hepatitis": "Hepatite"
            },
            "endocrinology": {
                "title": "Indwara z'Ubwirinzi bw'Umubiri",
                "diabetes": "Diyabete",
                "thyroidDisorders": "Indwara za thyroid",
                "hormonalImbalances": "Kutangana k'imisemburo",
                "osteoporosis": "Kunanuka kw'amagufa",
                "adrenalDisorders": "Indwara z'utunyama twa adrenal"
            },
            "pulmonology": {
                "title": "Indwara z'Imyanya y'Ubuhumekero",
                "asthma": "Astitima",
                "copd": "Indwara y'ubuhumekero idakira (COPD)",
                "pneumonia": "Inzoka y'ubuhumekero (Pneumonia)",
                "tuberculosis": "Igituntu",
                "sleepApnea": "Guhagarara guhumeka mu gihe cyo gusinzira"
            },
            "gynecology": {
                "title": "Indwara z'Abagore",
                "menstrualDisorders": "Ibibazo byo mu mihango",
                "endometriosis": "Endometriosis",
                "pcos": "PCOS",
                "fibroids": "Fibroids",
                "infertility": "Kutabyara"
            }
        },
        "departments1": {
            "featured_title": "Ibice Byihariye",
            "featured_description": "Sura ibice byacu by’ubuvuzi bikunzwe cyane, bitanga ubuvuzi bw’umwihariko butangwa n’abaganga babimenyereye",
            "specialists_available": "Abahanga {{count}} baboneka",
            "learn_more": "Menya byinshi",
            "departments_list": {
                "cardiology": {
                    "name": "Cardiology",
                    "description": "Ishami rya Cardiology ritanga ubuvuzi bwuzuye ku ndwara z’umutima n’imiyoboro y’amaraso. Kuva ku bipimo by’ubuvuzi kugeza ku buvuzi buhanitse, abaganga bacu b’umutima bashobora gufasha byose kuva ku bipimo bisanzwe kugeza ku ndwara zikomeye z’umutima.",
                    "services": [
                        "Echocardiography",
                        "ECG",
                        "Ikizamini cy’umutima ku kazi",
                        "Gucunga indwara z’umutima",
                        "Kwita ku gitutu cy’amaraso"
                    ]
                },
                "neurology": {
                    "name": "Neurology",
                    "description": "Ishami rya Neurology rihugukira indwara z’ubwonko, umusaya w’inyuma n’imitsi. Abaganga bacu bakoresha ibikoresho by’ubuvuzi buhanitse mu kuvura indwara zitandukanye kuva ku mutwe kugeza ku ndwara zikomeye z’ubwonko.",
                    "services": [
                        "Ikizamini cya EEG",
                        "Isuzuma ry’ubwonko",
                        "Gucunga umutwe",
                        "Kwita ku gukomereka k’ubwonko",
                        "Kuvura indwara z’imitsi"
                    ]
                },
                "pediatrics": {
                    "name": "Pediatrics",
                    "description": "Ishami rya Pediatrics rihatira ubuzima bw’abana kuva bavutse kugeza bakuze. Abaganga b’abana batanga ubuvuzi bwo kubarinda indwara, kuvura indwara z’abana, no gukurikirana iterambere ryabo kugira ngo bakure neza.",
                    "services": [
                        "Gusura kwa muganga kwa buri mwana",
                        "Inkingo",
                        "Gukurikirana ubuzima bw’umwana",
                        "Isuzuma ry’iterambere",
                        "Kugisha inama abaganga b’abana"
                    ]
                }
            }
        },
        services: {
            title: "Serivisi",
            subtitle: "Telefone",
            teleconsultation: {
                desc: "Ganira n’abaganga ukoresheje serivisi yacu yo kuvugana kure (teleconsultation)."
            },
            learnMore: "Menya byinshi",
            appointments: {
                desc: "Teganya gahunda z’ibiganiro n’abaganga byoroshye."
            },
            emergency: {
                desc: "Shaka ubufasha bw’ubutabazi bwihuse igihe cyose ubukeneye."
            },
            pharmacy: {
                desc: "Tuma imiti ukoresheje serivisi zacu za farumasi."
            },
            ai: {
                badge: "Menya Umufasha wawe w’Ubuzima wa AI",
                desc: "AI yacu igufasha gukurikirana ubuzima, imigenzereze, imiti, n’ibimenyetso by’indwara.",
                features: {
                    monitoring: "Gukurikirana Ubuzima",
                    lifestyle: "Inama z’Imigenzereze",
                    medication: "Kwibutsa Imiti",
                    symptom: "Kureba Ibimenyetso by’Indwara"
                },
                cta: "Menya Umufasha wa AI"
            }
        },
        missionVision: {
            mission: {
                title: "Inshingano Zacu",
                description: "Guhindura uburyo bwo gutanga serivisi z’ubuvuzi mu Rwanda binyuze mu gutanga serivisi zoroshye, zihendutse kandi zifite ireme hifashishijwe ikoranabuhanga rigezweho. Intego yacu ni uguhuza abarwayi n’abatanga serivisi z’ubuvuzi mu buryo bworoshye, tukemeza ko buri Munyarwanda abona ubuvuzi akeneye igihe abukeneye."
            },
            vision: {
                title: "Icyerekezo Cyacu",
                description: "Kuba urubuga rw’ibanze rw’ikoranabuhanga mu buvuzi mu Rwanda no muri Afurika y’Uburasirazuba, duhanga sisitemu y’ubuvuzi aho ikoranabuhanga ryambuka icyuho hagati y’abarwayi n’abatanga serivisi z’ubuvuzi. Dufite icyizere cy’ahazaza aho buri Munyarwanda, atitaye ku gahenge ke cyangwa uko ahagaze mu bukungu, azagira uburenganzira bungana bwo kubona serivisi z’ubuvuzi zifite ireme."
            }
        },
        about: {
            title1: "Ibyerekeye",
            highlight: "HEALTHLINE",
            title2: "RWANDA",
            subtitle: "Guhindura uburyo bwo kugera ku buvuzi mu Rwanda binyuze mu ikoranabuhanga rigezweho",
            imageAlt: "Itsinda rya ONE HEALTHLINE CONNECT",
            bottomTitle: "Guhuza inzira mu kugera ku buvuzi",
            bottomDescription: "Yashinzwe mu mwaka wa 2025, ONE HEALTHLINE CONNECT yiyemeje korohereza Abanyarwanda bose kubona ubuvuzi bufite ireme binyuze mu ikoranabuhanga no guhanga udushya."
        },
        "departmentss": {
            "title": "Ishami ryacu ry'ubuvuzi",
            "subtitle": "ONE HEALTHLINE CONNECT iguha uburyo bwo kugera ku byiciro bitandukanye by’ubuvuzi kugira ngo uhabwe serivisi zose ukeneye",
            "cardiology": {
                "name": "Ubuganga bw’umutima",
                "description": "Isuzuma n’ivuriro ry’indwara z’umutima n’ubundi burwayi bwa sisitemu y’amaraso"
            },
            "pediatrics": {
                "name": "Ubuvuzi bw’abana",
                "description": "Ubuvuzi bw’abana b’incuke, abato n’ingimbi"
            },
            "orthopedics": {
                "name": "Ubuvuzi bw’amagufwa",
                "description": "Kuvura indwara z’amagufwa, ingingo n’imikaya"
            },
            "neurology": {
                "name": "Ubuvuzi bw’ubwonko",
                "description": "Isuzuma n’ivuriro ry’indwara z’ubwonko na sisitemu y’imyakura"
            },
            "dermatology": {
                "name": "Ubuvuzi bw’uruhu",
                "description": "Kwita ku ndwara z’uruhu, imisatsi n’inzara"
            },
            "ophthalmology": {
                "name": "Ubuvuzi bw’amaso",
                "description": "Isuzuma n’ivuriro ry’indwara z’amaso n’ibibazo byo kubona"
            },
            "ent": {
                "name": "Ubuvuzi bw’amatwi, izuru n’umuhogo",
                "description": "Kuvura indwara z’amatwi, izuru, umunwa, umutwe n’ijosi"
            },
            "gynecology": {
                "name": "Ubuvuzi bw’abagore",
                "description": "Ubuzima bw’imyororokere y’abagore n’ivuriro ry’ababyeyi batwite"
            },
            "urology": {
                "name": "Ubuvuzi bw’imyanya y’inkari",
                "description": "Isuzuma n’ivuriro ry’indwara z’imyanya y’inkari n’imyororokere y’abagabo"
            },
            "psychiatry": {
                "name": "Ubuvuzi bw’indwara zo mu mutwe",
                "description": "Kwita ku buzima bwo mu mutwe, harimo inama n’imiti"
            },
            "dentistry": {
                "name": "Ubuvuzi bw’amenyo",
                "description": "Kwita ku buzima bw’amenyo, isuku n’ivuriro"
            },
            "nutrition": {
                "name": "Ibijyanye n’imirire",
                "description": "Inama n’ubuvuzi bushingiye ku mirire ku ndwara zitandukanye"
            }
        },
        "medicalDepartments": {
            "title": "Ibitaro bya",
            "highlight": "Ubuvuzi",
            "subtitle": "n'Ubuhanga",
            "description": "Fungura serivisi z’ubuvuzi bwihariye mu mashami atandukanye y’ubuvuzi hamwe n’abaganga b’icyitegererezo mu Rwanda.",
            "searchPlaceholder": "Shakisha ishami cyangwa indwara...",
            "departments": {
                "cardiology": "Ishami ry’imitima",
                "pediatrics": "Ishami ry’abana",
                "orthopedics": "Ishami ry’imikaya n’amagufa",
                "neurology": "Ishami ry’ubwonko"
            },
            "imageAlt": "Ibitaro by'Ubuvuzi",
            "specializedCareTitle": "Serivisi z’Ubufasha bwihariye",
            "departmentsCount": "Amashami 12+ y’ubuvuzi aboneka",
            "badges": {
                "expertSpecialists": "Abahanga B’inzobere",
                "advancedTreatments": "Ubufasha bugezweho"
            }
        },
        "faq": {
            "title": "Ibibazo Bikunze Kubazwa",
            "subtitle": "Shakisha ibisubizo by’ibibazo bisanzwe ku bijyanye na serivisi zacu. Niba udabona ikibazo cyawe hano, twandikire.",
            "teleconsultation": {
                "question": "Nigute nakwiyandikisha mu kugisha inama hifashishijwe ikoranabuhanga?",
                "answer": "Kugira ngo wiyandikishe mu kugisha inama hifashishijwe ikoranabuhanga, shira porogaramu ya ONE HEALTHLINE CONNECT, wiyandikishe, hanyuma ujye mu gice cya Teleconsultation. Hitamo inzobere wifuza, uhitemo igihe gihari, hanyuma wemeze gahunda. Uzahabwa ubutumwa bwo kwemeza ndetse n'ubutumwa bwo kwibutsa mbere y’inama yawe."
            },
            "specialists": {
                "question": "Ni ubuhe bwoko bw’inzobere buboneka kuri uru rubuga?",
                "answer": "ONE HEALTHLINE CONNECT ifatanya n’inzobere zitandukanye zirimo abaganga rusange, abaganga b’abana, abaganga b’umutima, abaganga b’uruhu, abaganga b’imitekerereze, abaganga b’imirire, n’izindi. Ubwinshi bw’inzobere bushobora gutandukana bitewe n’aho uherereye n’igihe cy’umunsi."
            },
            "emergency": {
                "question": "Serivisi y’ihutirwa ikora ite?",
                "answer": "Mu gihe cy’ibyihutirwa, fungura porogaramu ya ONE HEALTHLINE CONNECT hanyuma ukande kuri buto ya Emergency. Uzahuzwa n’ikipe yacu yihutirwa izasuzuma ikibazo cyawe kandi ikwohereze ubufasha bukwiriye. Porogaramu inatanga amakuru y’aho uri hakoreshejwe GPS kugira ngo ubufasha bugereho vuba."
            },
            "prescriptionOrder": {
                "question": "Ese nshobora gutumiza imiti yanditswe na muganga binyuze muri porogaramu?",
                "answer": "Yego, ushobora gutumiza imiti yanditswe na muganga binyuze muri porogaramu. Nyuma y’inama, muganga wawe ashobora kohereza icyemezo cy’imiti ku mabitaro dufatanyije. Cyangwa nanone, ushobora gushyira ifoto y’icyemezo cyawe muri porogaramu. Hitamo farumasi wifuza, reba ibyo wasabye, hanyuma uhitemo koherezwa cyangwa kuza kubikura."
            },
            "aiAssistantAccuracy": {
                "question": "Umufasha mu buzima wa AI ni uwuhe mu kuri?",
                "answer": "Umufasha wacu wa AI mu buzima ugenewe gutanga amakuru rusange n’inama bishingiye ku makuru utanze. Nubwo ukoresha uburyo buhanitse bwo gusesengura ibimenyetso n’amakuru y’ubuzima, ntabwo usimbura inama z’umuganga. Buri gihe ganira n’umuganga ku byo uvurwa."
            },
            "dataSecurity": {
                "question": "Amakuru yanjye y’ubuzima arinzwe kuri uru rubuga?",
                "answer": "Yego, turakingira amakuru y’ubuzima bwawe. Amakuru yose arakingirwa kandi abitswe mu buryo butekanye hakurikijwe amategeko arengera amakuru. Ntituzasangiza abandi makuru yawe atabiherewe uburenganzira, keretse igihe amategeko abisaba cyangwa mu bihe by'ibyihutirwa."
            }
        },
        "pricing": {
            "title": "Ibiciro Byumvikana kandi Bifunguye",
            "subtitle": "Hitamo gahunda ikwiranye n'ibyo ukeneye mu buvuzi. Gahunda zose zirimo serivisi shingiro zacu.",
            "mostPopular": "Ikoreshwa cyane",
            "ctaBusiness": "Vugana n'Ishami ry'Ubucuruzi",
            "ctaDefault": "Tangira",
            "note": "Gahunda zose zirimo uburyo bwo gukoresha porogaramu ya telefoni n'urubuga. Ibiciro byerekanwe biri mu mafaranga y'u Rwanda (RWF). Ku bijyanye na gahunda z'ibigo, nyamuneka vugana n'itsinda ryacu ry'ubucuruzi kugira ngo tubagezeho igiciro gikwiye.",
            "plans": {
                "basic": {
                    "name": "Isanzwe",
                    "price": "Ubuntu",
                    "description": "Serivisi z'ubuvuzi z'ibanze ku bantu ku giti cyabo",
                    "features": [
                        "Guhanahana amakuru n'abaganga rusange hakoreshejwe ikoranabuhanga",
                        "Kubika gahunda y'ubuvuzi y'ibanze",
                        "Ubufasha mu gihe cy'ibibazo by'ubuzima",
                        "Gutanga imiti (harimo amafaranga yo kuyigeza aho uri)",
                        "Imikorere mike ya AI mu buvuzi"
                    ]
                },
                "premium": {
                    "name": "Yisumbuye",
                    "price": "5,000 RWF",
                    "period": "buri kwezi",
                    "description": "Serivisi z'ubuvuzi zigezweho ku bantu ku giti cyabo n'imiryango",
                    "features": [
                        "Guhanahana amakuru ukoresheje ikoranabuhanga n'abaganga bose b'inzobere uko ubyifuza",
                        "Kuba uwa mbere mu gushyirirwaho gahunda",
                        "Ubufasha mu gihe cy'ibibazo by'ubuzima mu buryo bwihuse",
                        "Gutanga imiti ku buntu",
                        "Imikorere yuzuye ya AI mu buvuzi",
                        "Konti z'umuryango (ku bantu kugeza kuri 4)",
                        "Kubika no gusangira dosiye z'ubuzima"
                    ]
                },
                "business": {
                    "name": "Ibigo",
                    "price": "Ibiganiro byihariye",
                    "description": "Ibisubizo by'ubuvuzi ku bigo n'imiryango y'ubucuruzi",
                    "features": [
                        "Gahunda z'ubuvuzi zihariye ku bakozi",
                        "Umuyobozi wihariye ku bigo",
                        "Gahunda yo guha gahunda abantu benshi icyarimwe",
                        "Ikibaho cyo gukurikirana ubuzima bw'abakozi",
                        "Porogaramu z'ubuzima ku bigo",
                        "Guhuza n'inyungu z'ubuvuzi zisanzwe"
                    ]
                }
            }
        },
        "howItWorks": {
            "title": "Uburyo Bikora",
            "subtitle": "Uburyo bworoshye mu byiciro 4 byo gutangira",
            "step1": {
                "title": "Iyandikishe",
                "description": "Fungura konti y'ubuntu mu minota mike gusa."
            },
            "step2": {
                "title": "Tanga Amakuru Yawe",
                "description": "Uzuza amakuru yawe bwite n'ay'ubuvuzi mu buryo bwizewe."
            },
            "step3": {
                "title": "Hitamo Serivisi",
                "description": "Hitamo serivisi y'ubuvuzi ijyanye n'ibyo ukeneye."
            },
            "step4": {
                "title": "Tangira Kwifashishwa",
                "description": "Tangirira ako kanya kuganira n'umuganga cyangwa kwakira serivisi."
            }
        },
        "aiDoctor": {
            "label": "Umufasha mu Buzima wa AI",
            "title": "Umunshuti wawe w'ubuzima ukoresheje AI",
            "description": "Umufasha wacu mu buzima ukoresheje AI aguha uburyo bwo kugenzura ubuzima bwawe, inama, n’ubuyobozi bishingiye ku makuru y’ubuzima bwawe n’ibibazo byawe. Ni nko kugira umukozi w’ubuzima mu mufuka wawe, uhora ahari amasaha 24/7 kugira ngo agusubize no kuguha ubufasha mu rugendo rwawe rw’ubuzima.",
            "features": {
                "personalizedMonitoring": "Uburyo bwo kugenzura ubuzima bwawe bwihariye",
                "aiSymptomAssessment": "Isuzuma ry'ibimenyetso ukoresheje AI",
                "wellnessRecommendations": "Inama z’imibereho myiza",
                "medicationReminders": "Ibukiranya byo gufata imiti no kugenzura",
                "healthDataAnalysis": "Isesengura ry’amakuru y’ubuzima",
                "integrationWithServices": "Guhuza neza n’izindi serivisi za HEALTHLINE"
            },
            "capabilitiesTitle": "Ubumenyi bw’Umufasha wa AI",
            "capabilities": {
                "generalInquiries": "Ibibazo rusange ku buzima",
                "chronicManagement": "Gucunga indwara zidakira",
                "nutritionAdvice": "Inama ku mirire n'ibiribwa",
                "mentalHealthSupport": "Ubufasha mu buzima bwo mu mutwe",
                "sleepImprovement": "Inama zo kunoza ibijyanye no gusinzira",
                "physicalActivity": "Inama ku myitozo ngororamubiri"
            },
            "tryAssistant": "Gerageza Umufasha wa AI",
            "learnMore": "Menya byinshi",
            "imageAlt": "Umufasha mu buzima wa AI",
            "overlay": {
                "healthMonitoringTitle": "Kugenzura ubuzima",
                "healthMonitoringDesc": "Kugenzura ibimenyetso n’imyitwarire",
                "personalizedPlansTitle": "Gahunda zihariye",
                "personalizedPlansDesc": "Inama z'ubuzima zigenewe wowe",
                "assistanceTitle": "Ubufasha 24/7",
                "assistanceDesc": "Buri gihe ahari kugufasha"
            }
        },
        "pharmacy": {
            "label": "Serivisi za Farumasi",
            "title": "Tegeka imiti muri farumasi zifatanyije",
            "description": "Serivisi yacu ya farumasi igufasha gutumiza imiti yandikiwe na muganga n'itarandikwa mu mafarumasi y’igihugu hose...",
            "features": {
                "order": "Teka imiti mu mafarumasi yifatanyije",
                "upload": "Ohereza ordonnance muri app",
                "compare": "Geranya ibiciro by’imiti mu mafarumasi",
                "delivery": "Gutwara imiti ku rugo biraboneka",
                "reminders": "Ibuka gufata imiti yawe",
                "refill": "Kumenyeshwa igihe cyo kongera guhabwa imiti"
            },
            "partners": {
                "title": "Afarumasi dukorana",
                "kigali": "Farumasi ya Kigali",
                "rwanda": "Rwanda Pharmaceuticals",
                "kimironko": "Farumasi ya Kimironko",
                "nyamirambo": "Farumasi y'Ikigo Nderabuzima cya Nyamirambo",
                "remera": "Farumasi ya Remera",
                "muhima": "Farumasi y'Ibitaro bya Muhima"
            },
            "overlay": {
                "delivery": {
                    "title": "Kugeza ku rugo",
                    "subtitle": "Mu masaha 3 muri Kigali"
                },
                "reminders": {
                    "title": "Ibuka gufata imiti",
                    "subtitle": "Ntuzigere uyibagirwa"
                },
                "payment": {
                    "title": "Uburyo bwinshi bwo kwishyura",
                    "subtitle": "Mobile money, amakarita, amafaranga"
                }
            },
            "imageAlt": "Serivisi za farumasi",
            "buttons": {
                "order": "Tegeka imiti",
                "view": "Reba amafarumasi"
            }
        },
        "emergency": {
            "label": "Serivisi z'Amahutwa",
            "title": "Ubufasha bwihuse mu gihe buri munota ari ingenzi",
            "description": "Serivisi zacu z'ubutabazi zitanga ubufasha bwihuse mu bihe by'amage...",
            "features": {
                "24_7_hotline": "Ubufasha bw'amasaha 24/7 ku murongo",
                "ambulance_dispatch": "Kohereza Ambulance",
                "gps_tracking": "Gukurikirana aho uri ukoresheje GPS",
                "direct_er_connection": "Kwihuza n'ibyumba by'ubutabazi",
                "first_aid_guidance": "Inama z'ubutabazi bwa mbere kuri telefone",
                "contact_notification": "Kumenyesha abantu ba hafi"
            },
            "types_label": "Ubwoko bw'ibibazo dukemura",
            "types": {
                "medical": "Ibibazo by'ubuvuzi",
                "accidents": "Impanuka n'ibikomere",
                "cardiac": "Indwara z'umutima",
                "respiratory": "Ibibazo byo guhumeka",
                "allergic": "Allergie zikomeye",
                "pregnancy": "Ibibazo byo mu gihe cyo gutwita"
            },
            "cta_assistance": "Ubufasha bw'Amahutwa",
            "cta_learn_more": "Menya Ibindi",
            "image_alt": "Serivisi z'Amahutwa",
            "overlay": {
                "ambulance_title": "Kohereza Ambulance",
                "ambulance_sub": "Igihe gisanzwe cyo kugera: iminota 15",
                "medical_guidance_title": "Inama z'ubuvuzi",
                "medical_guidance_sub": "Amabwiriza y'ubutabazi bwa mbere",
                "gps_title": "Gukurikirana GPS",
                "gps_sub": "Kumenya aho uri neza"
            }
        },
        "appointment": {
            "tag": "Gufata Rendez-vous",
            "title": "Teganya Rendez-vous n'Abatanga Serivisi z'Ubuzima Bakomeye",
            "description": "Serivisi yacu yo gufata rendez-vous igufasha kubona igihe cyo gusura abatanga serivisi z’ubuzima igihe cyose ubishaka. Waba ukeneye isuzuma rusange cyangwa kugisha inama inzobere, urubuga rwacu rugufasha kubona no gufata igihe cya muganga bigufashe.",
            "features": [
                "Fata rendez-vous n'inzobere mu Rwanda hose",
                "Hitamo hagati yo kujya kwa muganga cyangwa gukoresha uburyo bwo kuri interineti",
                "Bona ibikumbusho bya rendez-vous ukoresheje SMS na email",
                "Hindura cyangwa usibe rendez-vous byoroshye",
                "Reba igihe cya muganga mu buryo bw’ako kanya",
                "Geraho amateka ya rendez-vous yawe"
            ],
            "partnerHospitalsTitle": "Amavuriro Dukorana",
            "hospitals": [
                "Ibitaro bya Kaminuza ya Kigali",
                "Ibitaro bya Gisirikare bya Rwanda",
                "Ibitaro bya King Faisal",
                "Ibitaro bya Butaro",
                "Ibitaro bya Kibagabaga",
                "CHUK"
            ],
            "buttons": {
                "book": "Fata Rendez-vous",
                "viewSpecialties": "Reba Ibyiciro by’Ubuvuzi"
            },
            "cards": {
                "availability": {
                    "title": "Igihe gihari ako kanya",
                    "subtitle": "Reba amasaha ahari instantly"
                },
                "location": {
                    "title": "Amahitamo y'Aho gukorera",
                    "subtitle": "Mu maso cyangwa kuri interineti"
                },
                "facilities": {
                    "title": "Amavuriro Menshi",
                    "subtitle": "Ibitaro mu gihugu hose"
                }
            }
        },
        "cta.subtitle": "Serivisi z'ubuvuzi bugezweho mu Rwanda",
        "nav.home": "Ahabanza",
        "hero": {
            "label": "Serivisi yo Kwivuza Hifashishijwe Ikoranabuhanga",
            "title": "Hura n’Abaganga b’Inzobere Utavuye mu Rugo",
            "subtitle": "Serivisi yacu iguhuza n’abaganga b’inzobere baturuka mu bitaro bitandukanye byo mu Rwanda."
        },
        "features": {
            "consultations": "Inama n’inzobere zivuye mu bitaro bitandukanye",
            "high_quality_video": "Amashusho n’amajwi byiza cyane",
            "secure_messaging": "Ubutumwa bwizewe hagati yawe n’umuganga",
            "digital_prescriptions": "Ibyo muganga yanditse mu buryo bwa mudasobwa",
            "medical_records": "Kureba no gusangira dosiye y’ubuvuzi",
            "followup_scheduling": "Gutegeka igihe cyo kongera kuganira n’umuganga"
        },
        "steps": {
            "title": "Uburyo Serivisi yo Kwivuza Hifashishijwe Ikoranabuhanga Ikora",
            "select_hospital": "Hitamo Ibitaro/Kwa muganga",
            "select_hospital_desc": "Hitamo mu bafatanyabikorwa bacu",
            "choose_type": "Hitamo Ubwoko bw’Inama",
            "choose_type_desc": "Inama rusange cyangwa iy’inzobere",
            "select_insurance": "Hitamo Ubwishingizi",
            "select_insurance_desc": "Hitamo uburyo bwo kwishyura",
            "register_details": "Andika Ibisobanuro by’Umurwayi",
            "register_details_desc": "Injiza amakuru yawe",
            "pay_fee": "Ishyura Amafaranga y’Inama",
            "pay_fee_desc": "Koresha Banki cyangwa USSD",
            "attend_consultation": "Jya mu Nama yawe",
            "attend_consultation_desc": "Hifashishijwe amashusho cyangwa telefone",
            "receive_followup": "Yakira Igikorwa gikurikira",
            "receive_followup_desc": "Ibyo muganga yanditse n’inama zikurikira",
            "review_history": "Reba Amateka y’Ubuvuzi",
            "review_history_desc": "Reba dosiye yawe y’ubuvuzi"
        },
        "specialties": {
            "title": "Ubwoko bw’Ubuvuzi Buhari",
            "general_medicine": "Ubuvuzi rusange",
            "pediatrics": "Ubuvuzi bw’Abana",
            "cardiology": "Ubuvuzi bw’Umutima",
            "dermatology": "Ubuvuzi bw’Uruhu",
            "psychiatry": "Ubuvuzi bwo mu mutwe",
            "nutrition": "Ubuvuzi bwo kugaburira"
        },
        "availability": {
            "by_appointment": "Binyuze mu gutumiza"
        },
        "buttons": {
            "start_consultation": "Tangira Inama",
            "view_records": "Reba Dosiye y’Ubuvuzi"
        },
        "partners": {
            "title": "Ibitaro n’Abafatanyabikorwa Bacu"
        },
        "cta": {
            "title": "Witeguye Gutangira Inama?",
            "subtitle": "Ujye mu mubare w’Abanyarwanda ibihumbi bakoresha ubuvuzi bwo mu rugo",
            "button": "Bukisha Inama Ubu"
        },
        'nav.home': 'Ahabanza',
        'nav.services': 'Serivisi',
        'nav.departments': 'Amashami',
        'nav.about': 'Ibyerekeye',
        'nav.contact': 'Kuvugana',
        'nav.signin': 'Kwinjira',
        'nav.logout': 'Gusohoka',
        'nav.findDoctor': 'Shakisha Muganga',
        'nav.bookAppointment': 'Gena Agenda',
        'nav.healthBlog': 'Blog y\'Ubuzima',
        'nav.ourServices': 'Serivisi Zacu',
        'nav.teleconsultation': 'Teleconsultation',
        'nav.appointments': 'Amagena',
        'nav.emergency': 'Ibyihutirwa',
        'nav.pharmacy': 'Farumasi',
        'nav.aiAssistant': 'Umufasha wa AI w\'Ubuzima',
        // How It Works
        'howItWorks.title': 'Uko Bikora',
        'howItWorks.subtitle': 'Gutangira ONE HEALTHLINE CONNECT byoroshye. Kurikira intambwe zoroshye kugirango ubonere serivisi z\'ubuvuzi.',
        'howItWorks.step1.title': 'Gukuramo Porogaramu',
        'howItWorks.step1.description': 'Gukuramo porogaramu ya ONE HEALTHLINE CONNECT muri App Store cyangwa Google Play Store.',
        'howItWorks.step2.title': 'Gukora Konti',
        'howItWorks.step2.description': 'Kwiyandikisha ukoresheje nimero ya telefoni cyangwa imeli hanyuma uzuza umwirondoro w\'ubuzima.',
        'howItWorks.step3.title': 'Guhitamo Serivisi',
        'howItWorks.step3.description': 'Hitamo serivisi y\'ubuvuzi ukeneye mu byiciro byose tutanga.',
        'howItWorks.step4.title': 'Guhuza n\'Abatanga Serivisi',
        'howItWorks.step4.description': 'Guhuza n\'abatanga serivisi z\'ubuvuzi, gena amagena, cyangwa kubona serivisi z\'ibyihutirwa.',
        // Common
        'common.loading': 'Gukuramo...',
        'common.error': 'Ikosa',
        'common.success': 'Byakunze',
        'common.cancel': 'Kuraguza',
        'common.save': 'Kubika',
        'common.edit': 'Guhindura',
        'common.delete': 'Gusiba',
        'common.submit': 'Kohereza',
        'common.search': 'Gushaka',
        'common.filter': 'Kuyungurura',
        'common.reset': 'Gutangiza',
        'common.clear': 'Gusiba',
        'common.view': 'Kureba',
        'common.download': 'Gukuramo',
        'common.upload': 'Kohereza',
        'common.next': 'Ikurikira',
        'common.previous': 'Ibibanziriza',
        'common.back': 'Gusubira inyuma',
        'common.continue': 'Komeza',
        'common.confirm': 'Kwemeza',
        'common.yes': 'Yego',
        'common.no': 'Oya',
        'common.close': 'Gufunga',
        'common.open': 'Gufungura',
        // Language
        'language.english': 'Icyongereza',
        'language.kinyarwanda': 'Ikinyarwanda',
        // Auth
        'auth.login': 'Kwinjira',
        'auth.register': 'Kwiyandikisha',
        'auth.email': 'Imeli',
        'auth.password': 'Ijambo ry\'ibanga',
        'auth.confirmPassword': 'Kwemeza ijambo ry\'ibanga',
        'auth.firstName': 'Izina rya mbere',
        'auth.lastName': 'Izina ry\'umuryango',
        'auth.phone': 'Telefoni',
        'auth.forgotPassword': 'Wibagiwe ijambo ry\'ibanga?',
        'auth.rememberMe': 'Nzibuke',
        'auth.alreadyHaveAccount': 'Usanzwe ufite konti?',
        'auth.dontHaveAccount': 'Ntufite konti?',
        'auth.loginError': 'Kwinjira byanze. Suzuma ibyo wanditse.',
        'auth.registerError': 'Kwiyandikisha byanze. Ongera ugerageze.',
        'auth.invalidEmail': 'Andika imeli nyayo.',
        'auth.passwordTooShort': 'Ijambo ry\'ibanga rigomba kuba rifite ibiharuro 8 byibuze.',
        'auth.passwordMismatch': 'Amagambo y\'ibanga ntabwo ahuje.',
        // Patient Dashboard
        'patient.menu.dashboard': 'Ibikubiyemo',
        'patient.menu.bookAppointment': 'Gena Agenda',
        'patient.menu.teleconsultation': 'Teleconsultation',
        'patient.menu.pharmacyOrders': 'Ibicuruzwa bya Farumasi',
        'patient.menu.aiAssistant': 'Umufasha wa AI',
        'patient.menu.emergency': 'Ibyihutirwa',
        'patient.menu.history': 'Amateka y\'Ubuvuzi',
        'patient.header.panel': 'Ikiyega cy\'Umurwayi',
        'patient.user.role': 'Umurwayi',
        'patient.dashboard.title': 'Ikiyega cy\'Umurwayi',
        'patient.dashboard.welcome': 'Murakaza neza',
        'patient.dashboard.upcomingAppointments': 'Amagena azaza',
        'patient.dashboard.recentOrders': 'Ibicuruzwa bya vuba',
        'patient.dashboard.healthMetrics': 'Ibipimo by\'ubuzima',
        // Doctor Dashboard
        'doctor.menu.dashboard': 'Ibikubiyemo',
        'doctor.menu.appointments': 'Amagena',
        'doctor.menu.patients': 'Abarwayi',
        'doctor.menu.teleconsultations': 'Teleconsultation',
        'doctor.menu.prescriptions': 'Imiti yanditse',
        'doctor.menu.settings': 'Amagenamiterere',
        'doctor.header.panel': 'Ikiyega cy\'Umuganga',
        'doctor.user.role': 'Umuganga',
        'doctor.dashboard.title': 'Ikiyega cy\'Umuganga',
        'doctor.dashboard.todayAppointments': 'Amagena y\'uyu munsi',
        'doctor.dashboard.totalPatients': 'Abarwayi bose',
        'doctor.dashboard.pendingConsultations': 'Amagena ategereje',
        // Admin Dashboard
        'admin.menu.dashboard': 'Ibikubiyemo',
        'admin.menu.userManagement': 'Gucunga Abakoresha',
        'admin.menu.patients': 'Abarwayi',
        'admin.menu.doctors': 'Abaganga',
        'admin.menu.appointments': 'Amagena',
        'admin.menu.reports': 'Raporo',
        'admin.menu.security': 'Umutekano',
        'admin.menu.settings': 'Amagenamiterere',
        'admin.menu.analytics': 'Isesengura',
        'admin.menu.messages': 'Ubutumwa',
        'admin.header.panel': 'Ikiyega cy\'Umuyobozi',
        'admin.user.admin': 'Umuyobozi',
        'admin.dashboard.title': 'Ikiyega cy\'Umuyobozi',
        'admin.dashboard.totalUsers': 'Abakoresha bose',
        'admin.dashboard.activePatients': 'Abarwayi bakora',
        'admin.dashboard.activeDoctors': 'Abaganga bakora',
        'admin.dashboard.todayAppointments': 'Amagena y\'uyu munsi',
        // Appointments
        'appointments.title': 'Amagena',
        'appointments.book': 'Gena Agenda',
        'appointments.upcoming': 'Amagena azaza',
        'appointments.past': 'Amagena yarangiye',
        'appointments.cancelled': 'Amagena yahagaritswe',
        'appointments.status.confirmed': 'Byemejwe',
        'appointments.status.pending': 'Bitegereje',
        'appointments.status.cancelled': 'Byahagaritswe',
        'appointments.status.completed': 'Byarangiye',
        'appointments.selectDoctor': 'Hitamo Umuganga',
        'appointments.selectDate': 'Hitamo Itariki',
        'appointments.selectTime': 'Hitamo Igihe',
        'appointments.reason': 'Impamvu yo gusura',
        'appointments.notes': 'Andi manota',
        'appointmentsPage.title': 'Gena Agenda Yawe',
        'appointmentsPage.subtitle': 'Gena igihe cyo kubonana n\'inzobere mu buzima',
        // Services
        'services.teleconsultation': 'Teleconsultation',
        'services.appointments': 'Amagena',
        'services.emergency': 'Ibyihutirwa',
        'services.pharmacy': 'Farumasi',
        'services.aiAssistant': 'Umufasha wa AI w\'Ubuzima',
        'services.title': 'Serivisi Zacu',
        'services.subtitle': 'Serivisi z\'ubuvuzi zuzuye ku ntoki zawe',
        // Forms
        'form.required': 'Iki cyiciro kirakenewe',
        'form.invalidEmail': 'Andika imeli nyayo',
        'form.invalidPhone': 'Andika nimero ya telefoni nyayo',
        'form.selectOption': 'Hitamo ikigufitiye',
        'form.enterDetails': 'Andika amakuru',
        // Footer
        'footer.quickLinks': 'Ihuza ryihuse',
        'footer.services': 'Serivisi',
        'footer.support': 'Ubufasha',
        'footer.legal': 'Amategeko',
        'footer.contact': 'Duhamagare',
        'footer.followUs': 'Dukurikire',
        'footer.privacyPolicy': 'Politike y\'Ibanga',
        'footer.termsOfService': 'Amabwiriza y\'Ubukoresha',
        'footer.copyright': '© 2024 ONE HEALTHLINE CONNECT. Uburenganzira bwose butunganijwe.',
        'footer.description': 'Umufasha wawe wizewe w\'ubuvuzi utanga serivisi z\'ubuvuzi nziza mu Rwanda hose.',
        // Emergency
        'emergency.title': 'Serivisi z\'Ibyihutirwa',
        'emergency.description': 'Bonera ubufasha bw\'ubuvuzi bwihutirwa',
        'emergency.call': 'Hamagara Ibyihutirwa',
        'emergency.number': '912',
        // Pharmacy
        'pharmacy.title': 'Serivisi za Farumasi',
        'pharmacy.description': 'Gena imiti n\'ibicuruzwa by\'ubuzima',
        'pharmacy.orderMedicine': 'Gena Imiti',
        'pharmacy.uploadPrescription': 'Kohereza Umwandiko w\'imiti',
        // AI Assistant
        'ai.title': 'Umufasha wa AI w\'Ubuzima',
        'ai.description': 'Bonera inama z\'ubuzima zihariye kandi zigufasha',
        'ai.startChat': 'Tangira Guganira',
        'ai.askQuestion': 'Baza Ikibazo',
        // Errors
        'error.general': 'Hari ikibazo. Ongera ugerageze.',
        'error.network': 'Ikibazo cy\'uruyaga. Suzuma kwihuza kwawe.',
        'error.unauthorized': 'Ntufite uburenganzira bwo kubona iki.',
        'error.notFound': 'Ibyo wasabye ntibibonetse.',
        'error.serverError': 'Ikibazo cy\'umuyombi. Ongera ugerageze nyuma.',
        // Success Messages
        'success.appointmentBooked': 'Agenda yagenze neza!',
        'success.profileUpdated': 'Umwirondoro wavuguruwe neza!',
        'success.passwordChanged': 'Ijambo ry\'ibanga ryahinduwe neza!',
        'success.emailSent': 'Imeli yoherejwe neza!',
        // Tables
        'table.name': 'Izina',
        'table.email': 'Imeli',
        'table.phone': 'Telefoni',
        'table.status': 'Uko bimeze',
        'table.date': 'Itariki',
        'table.time': 'Igihe',
        'table.actions': 'Ibikorwa',
        'table.noData': 'Nta makuru ahari',
        'table.loading': 'Gukuramo amakuru...',
        // Modals
        'modal.confirmDelete': 'Wizeye ko ushaka gusiba iki kintu?',
        'modal.confirmCancel': 'Wizeye ko ushaka guhagarika?',
        'modal.unsavedChanges': 'Ufite impinduka zitabitswe. Urashaka kuzireka?',
        // Profile
        'profile.title': 'Umwirondoro',
        'profile.personalInfo': 'Amakuru Bwite',
        'profile.contactInfo': 'Amakuru yo Kuvugana',
        'profile.medicalInfo': 'Amakuru y\'Ubuvuzi',
        'profile.emergencyContact': 'Uhagurishijwe mu byihutirwa',
        'profile.updateProfile': 'Vugurura Umwirondoro',
        'profile.changePassword': 'Hindura Ijambo ry\'ibanga',
        // Settings
        'settings.title': 'Amagenamiterere',
        'settings.general': 'Rusange',
        'settings.notifications': 'Ibimenyesha',
        'settings.privacy': 'Ibanga',
        'settings.security': 'Umutekano',
        'settings.language': 'Ururimi',
        'settings.theme': 'Ubushushanyo',
        // Notifications
        'notifications.title': 'Ibimenyesha',
        'notifications.markAllRead': 'Menya Byose ko Byasomwe',
        'notifications.noNotifications': 'Nta bimenyesha',
        'notifications.newAppointment': 'Agenda nshya yashyizweho',
        'notifications.appointmentReminder': 'Kwibuka agenda',
        'notifications.prescriptionReady': 'Imiti yiteguye yo gufatwa',
        // Search
        'search.placeholder': 'Gushaka...',
        'search.noResults': 'Nta bisubizo byabonetse',
        'search.searchResults': 'Ibisubizo by\'Gushaka',
        'search.searchFor': 'Gushaka',
        // Filters
        'filter.all': 'Byose',
        'filter.active': 'Bikora',
        'filter.inactive': 'Bitakora',
        'filter.pending': 'Bitegereje',
        'filter.approved': 'Byemewe',
        'filter.rejected': 'Byangwe',
        'filter.dateRange': 'Igihe',
        'filter.status': 'Uko bimeze',
        'filter.category': 'Icyiciro',
        // Pagination
        'pagination.previous': 'Ibibanziriza',
        'pagination.next': 'Ikurikira',
        'pagination.page': 'Urupapuro',
        'pagination.of': 'muri',
        'pagination.showing': 'Byerekana',
        'pagination.results': 'ibisubizo',
        // Health Metrics
        'health.bloodPressure': 'Umuvuduko w\'amaraso',
        'health.heartRate': 'Umuvuduko w\'umutima',
        'health.temperature': 'Ubushyuhe',
        'health.weight': 'Ibiro',
        'health.height': 'Uburebure',
        'health.bmi': 'BMI',
        'health.lastUpdated': 'Bwanyuma bwavuguruwe',
        // Medical History
        'medical.history': 'Amateka y\'Ubuvuzi',
        'medical.allergies': 'Allergies',
        'medical.medications': 'Imiti y\'ubu',
        'medical.conditions': 'Indwara',
        'medical.surgeries': 'Ubuganga bwakozwe',
        'medical.familyHistory': 'Amateka y\'umuryango',
        // Prescriptions
        'prescription.title': 'Imiti yanditse',
        'prescription.medication': 'Umuti',
        'prescription.dosage': 'Ingano',
        'prescription.frequency': 'Inshuro',
        'prescription.duration': 'Igihe',
        'prescription.instructions': 'Amabwiriza',
        'prescription.prescribedBy': 'Yanditswe na',
        'prescription.prescribedDate': 'Itariki yanditsweho',
        irabaruta_logo: "Ikirango cya Irabaruta",
        ourStory: {
            title: "Inkuru Yacu",
            subtitle: "Urugendo rwa ONE HEALTHLINE CONNECT kuva ku gitekerezo kugeza ku kuba urubuga rw’ubuvuzi ruzwi mu Rwanda",
            sections: {
                beginning: {
                    title: "Intangiriro",
                    description: "ONE HEALTHLINE CONNECT yavutse kubera uburambe bw’umuntu bw’umuyobozi wayo, Dr. Jean Mugabo, wabonye imbogamizi imiryango yo mu cyaro ihura nazo mu kubona ubuvuzi bufite ireme. Nyuma yo kubura umwe mu bo mu muryango bitewe no gutinda kubona ubuvuzi, yihaye intego yo gushaka igisubizo cyazajya gihuza abarwayi n’abatanga serivisi z’ubuvuzi."
                },
                challenge: {
                    title: "Inzitizi",
                    description: "Mu Rwanda, abantu benshi bagihura n’ingorane zo kubona serivisi z’ubuvuzi kubera imbogamizi z’ubutaka, kubura ibikoresho bihagije, n’ikibazo cy’abaganga bake. Ibi cyane cyane ku batuye mu byaro, bakaba bagomba kugenda intera ndende kugira ngo bagere ku ivuriro rya hafi."
                },
                solution: {
                    title: "Igisubizo",
                    description: "Dushingiye ku kuba telefoni ngendanwa zikwirakwiriye cyane mu Rwanda, twashizeho urubuga rwa digital ruhuza abarwayi n’abatanga serivisi z’ubuvuzi, rubemerera kubona ibiganiro n’abaganga, guteganya gahunda, gutumiza imiti, no kubona ubufasha bwihutirwa—byose biboneka kuri telefoni zabo. Tunashyizeho ubwenge bw’ubukorano butanga ubufasha bwihariye ku buzima bw’umuntu."
                },
                today: {
                    title: "Uyu Munsi",
                    description: "Uyu munsi, ONE HEALTHLINE CONNECT itanga serivisi ku barwayi ibihumbi mu gihugu hose, ifatanya n’ibitaro binini, amavuriro, n’amaduka y’imiti mu gutanga serivisi zuzuye z’ubuvuzi. Ikipe yacu yakomeje kwaguka ikubiyemo abaganga, inzobere mu ikoranabuhanga, n’abayobozi b’ubucuruzi, bose bafite intego imwe yo kunoza uburyo bwo kubona ubuvuzi mu Rwanda."
                }
            }
        },
        nav: {
            home: "Ahabanza",
            services: "Serivisi",
            departments: "Amashami",
            about: "Abo turi bo",
            contact: "Tuvugishe",
            teleconsultation: "Kuganira na Muganga Kuri Telefone",
            appointments: "Guhamagara Inama",
            emergency: "Ibyihutirwa",
            pharmacy: "Farumasi",
            aiAssistant: "Menya Umufasha wawe w’Ubuzima wa AI",
            logout: "Sohoka",
            user: "Umukoresha",
            patient: "Umurwayi"
        },
        hero: {
            label: "Ubuvuzi Bushya mu Rwanda",
            subtitle: "Urubuga rw'ubuvuzi bugezweho kandi buboneka kuri bose",
            badge: "Serivisi z'ubuvuzi amasaha 24/7",
            title: "Ubuvuzi Bushya mu Rwanda",
            description: "ONE HEALTHLINE CONNECT ikuzanira ubuvuzi bugezweho mu ntoki zawe. Hura n’inzobere, bukisha gahunda, gerwaho serivisi z’ubutabazi, kandi ukurikiranire ubuzima bwawe hamwe kuri uru rubuga.",
            cta_get_started: "Tangira",
            cta_emergency: "Ubufasha bw'ihutirwa",
            users_count: "Abakoresha 1,200+",
            users_trust: "Bizera serivisi zacu",
            consultations_title: "Inama z'ubuvuzi kuri interineti",
            consultations_desc: "Hura n’inzobere utavuye mu rugo",
            badge_new: "BISHYA",
            user1: "Umukoresha 1",
            user2: "Umukoresha 2",
            user3: "Umukoresha 3",
            user4: "Umukoresha 4",
            doctor_consulting_with_patient: "Muganga ari kuganira n’umurwayi"
        },
        services: {
            title: "Serivisi Zacu",
            subtitle: "Serivisi z’ubuzima zuzuye zigenewe guhaza ibyifuzo byawe byose by’ubuvuzi",
            teleconsultation: {
                title: "Kuganira na Muganga Kuri Telefone",
                desc: "Vugana n’abaganga b’inzobere baturutse mu bitaro bitandukanye byo mu Rwanda"
            },
            appointments: {
                title: "Guhamagara Inama",
                desc: "Tegura kandi uyobore inama z’ubuvuzi byoroshye"
            },
            emergency: {
                title: "Ibyihutirwa",
                desc: "Serivisi z’inkunga yihuse amasaha 24/7 igihe ukeneye cyane"
            },
            pharmacy: {
                title: "Farumasi",
                desc: "Tegura imiti mu mafamuzi yo mu karere hamwe no kuyigeza aho uri"
            },
            ai: {
                badge: "Ikoranabuhanga rya AI",
                title: "Menya Umufasha wawe w’Ubuzima wa AI",
                desc: "Sisitemu yacu ya AI itanga kugenzura ubuzima bwawe bwite, inama z’imibereho, kwibutsa imiti, n’ibanze mu kuganira na muganga. Fata inama zihuse igihe cyose, aho uri hose.",
                features: {
                    monitoring: "Kugenzura Ubuzima",
                    lifestyle: "Inama z’Imibereho",
                    medication: "Inama z’Imiti",
                    symptom: "Gusesengura Ibimenyetso"
                },
                cta: "Gerageza AI Assistant"
            },
            learnMore: "Menya byinshi"
        },
        departments: {
            "meet_doctors_title": "Sanga Abaganga Bacu",
            "meet_doctors_description": "Ibice byacu byuzuyemo abaganga babimenyereye bafite intego yo gutanga serivisi nziza",
            "reviews": "Inyandiko {{count}}",
            "book_appointment": "Tegura Inama",
            "view_all_doctors": "Reba Abaganga Bose",
            title: "Amashami y’Ubuvuzi",
            subtitle: "Gerwaho ubuvuzi bw’inzobere mu byiciro bitandukanye by’ubuvuzi mu Rwanda",
            list: {
                cardiology: "Ibindi Byerekeye umutima",
                ophthalmology: "Ibyerekeye amaso",
                dentistry: "Ubuvuzi bw’amenyo",
                antenatal: "Kwitaho Ababyeyi",
                neurology: "Ubwonko n’Imitsi",
                orthopedics: "Ibindi Byerekeye amagufwa"
            },
            viewAll: "Reba Amashami Yose"
        },
        stats: {
            partnerHospitals: "Ibitaro dufatanya na byo",
            medicalSpecialists: "Abaganga b’inzobere",
            availability: "Igihe Serivisi iboneka",
            patientsServed: "Abakiriya twitayeho",
            partnerHospitalsCount: "10+",
            medicalSpecialistsCount: "50+",
            availabilityCount: "Amasaha 24/7",
            patientsServedCount: "5000+"
        },
        doctorsSection: {
            title: "Hura n’Abaganga b’Inzobere",
            description: "Dufite abaganga b’inzobere bo mu Rwanda bategereje kugufasha",
            viewAll: "Reba abaganga bose",
            available: "Ababoneka uyu munsi",
            unavailable: "Ntaboneka",
            book: "Tegura",
            chat: "Sangira ubutumwa",
            specialties: {
                cardiologist: "Umuganga w’umutima",
                pediatrician: "Umuganga w’abana",
                neurologist: "Umuganga w’ubwonko",
                dentist: "Umuganga w’amenyo"
            },
            reviews: "ibitekerezo",
            doctor1: {
                name: "Dr. Jean Mugabo",
                specialty: "Umuganga w’umutima",
                hospital: "Ibitaro bya Kaminuza ya Kigali",
                reviewsCount: 120,
                rating: 4.9
            },
            doctor2: {
                name: "Dr. Marie Uwase",
                specialty: "Umuganga w’abana",
                hospital: "Ibitaro by’Abana bya Rwanda",
                reviewsCount: 120,
                rating: 4.9
            },
            doctor3: {
                name: "Dr. Eric Ndayishimiye",
                specialty: "Umuganga w’ubwonko",
                hospital: "CHUK",
                reviewsCount: 120,
                rating: 4.9
            },
            doctor4: {
                name: "Claire Mutesi",
                specialty: "Umuganga w’amenyo",
                hospital: "Kliniki ya Gakwerere",
                reviewsCount: 120,
                rating: 4.9
            }
        },
        testimonials: {
            title: "Ibyo Abakiriya Bacu Bavuga",
            subtitle: "Incamake z’ubuzima bwiza bwavuye kuri ONE HEALTHLINE CONNECT",
            roles: {
                mother: "Umubyeyi w’abana babiri"
            },
            quotes: {
                1: "ONE HEALTHLINE CONNECT yahinduye uburyo umuryango wanjye ubona ubuvuzi. Kuganira na muganga kuri telefone byadutwaye igihe gito cyane ubwo umwana wanjye yari afite umuriro. Muganga yabashije kumuvura byihuse kandi imiti yaduherejwe vuba."
            },
            prev: "Ibyavuzwe mbere",
            next: "Ibikurikira",
            goto: "Jya kuri testimonial {{index}}"
        },
        cta: {
            title: "Kuramo Porogaramu ya ONE HEALTHLINE CONNECT Ubu",
            description: "Fata ubuzima bwawe mu biganza byawe hamwe na porogaramu yacu imwe ikubiyemo serivisi zose. Gerwaho serivisi igihe cyose, aho uri hose.",
            features: {
                access_24_7: "Serivisi z’abaganga amasaha 24/7",
                book_appointments: "Tegura inama n’inzobere",
                order_medications: "Tegura imiti igezweho mu rugo",
                emergency_assistance: "Ubufasha bwihuse mu byihutirwa",
                ai_health_monitoring: "Kugenzura ubuzima n’inama za AI"
            },
            download_ios: "Kuramo kuri iOS",
            download_android: "Kuramo kuri Android",
            app_image_alt: "Porogaramu ya ONE HEALTHLINE CONNECT"
        },
        contact: {
            title: "Tuvugishe",
            description: "Ufite ikibazo cyangwa ushaka ubufasha? Itsinda ryacu riri hano kugufasha.",
            form: {
                title: "Twandikire ubutumwa",
                name_label: "Amazina yawe",
                name_placeholder: "Andika amazina yawe",
                email_label: "Imeri",
                email_placeholder: "Andika imeri yawe",
                subject_label: "Insanganyamatsiko",
                subject_placeholder: "Tugire icyo tugufasha?",
                message_label: "Ubutumwa",
                message_placeholder: "Andika ubutumwa bwawe",
                send_button: "Ohereza Ubutumwa"
            },
            info: {
                title: "Amakuru y'Itumanaho",
                location: {
                    title: "Aho turi",
                    address: "KG 123 St, Kigali, Rwanda"
                },
                phone: {
                    title: "Telefoni",
                    main: "+250 788 123 456",
                    emergency: "Ibyihutirwa: +250 788 999 911"
                },
                email: {
                    title: "Imeri",
                    main: "info@healthlinerwanda.com"
                }
            },
            hours: {
                title: "Amasaha yo Gukorera",
                monday_friday: {
                    day: "Kuwa mbere - kuwa gatanu:",
                    time: "8:00 AM - 8:00 PM"
                },
                saturday: {
                    day: "Kuwa gatandatu:",
                    time: "9:00 AM - 6:00 PM"
                },
                sunday: {
                    day: "Kuwa mbere:",
                    time: "10:00 AM - 4:00 PM"
                },
                note: "* Serivisi z’ihutirwa zihari amasaha 24/7"
            }
        },
        logo: "Ikirango cya Irabaruta",
        footer: {
            description: "Duhindura uburyo ubuvuzi buboneka mu Rwanda biciye mu ikoranabuhanga. Intego yacu ni ugutanga ubuvuzi bufite ireme ku banyarwanda bose.",
            quickLinks: "Inzira Zihuse",
            services: "Serivisi zacu",
            support: "Ubufasha",
            contact: "Tuvugishe",
            privacyPolicy: "Amategeko y’ibanga",
            termsOfService: "Amategeko y’akazi",
            copyright: "Uburenganzira bwose burabitswe.",
            nav: {
                home: "Ahabanza",
                about: "Abo turi bo",
                services: "Serivisi",
                departments: "Amashami",
                contact: "Tuvugishe",
                teleconsultation: "Kuganira na Muganga Kuri Telefone",
                appointments: "Guhamagara Inama",
                emergency: "Ibyihutirwa",
                pharmacy: "Farumasi",
                aiAssistant: "Umufasha w’Ubuzima wa AI"
            },
            faq: "Ibibazo Bikunze Kubazwa"
        },
        servicesHero: {
            title: "Serivisi zacu z’<span class='text-green-600'>Ubuvuzi</span>",
            description: "Ibisubizo byuzuye by’ubuvuzi byateguwe guhaza ibyo ukeneye, biboneka igihe cyose, aho uri hose mu Rwanda.",
            getStarted: "Tangira",
            viewPricing: "Reba Ibiciro",
            imageAlt: "Serivisi za ONE HEALTHLINE CONNECT",
            coreServices: {
                title: "Serivisi 5 Z’ingenzi",
                description: "Zateguwe hakurikijwe uburyo bw’ubuvuzi mu Rwanda"
            },
            badges: {
                support: "Ubufasha amasaha 24/7",
                coverage: "Kugeza hose mu gihugu"
            }
        },
        servicesOverview: {
            title: "Serivisi zacu mu ncamake",
            description: "ONE HEALTHLINE CONNECT itanga serivisi z’ubuvuzi zuzuye ziteguye guhaza ibyifuzo bitandukanye by’abakoresha bacu",
            learnMore: "Menya byinshi"
        },
        services: {
            teleconsultation: {
                title: "Kuganira na Muganga Kuri Telefone",
                desc: "Kuganira na Muganga Kuri Telefone"
            },
            appointments: {
                title: "Guhamagara Inama",
                desc: "Guhamagara Inama"
            },
            emergency: {
                title: "Ibyihutirwa",
                desc: "Ibyihutirwa"
            },
            pharmacy: {
                title: "Farumasi",
                desc: "Farumasi"
            },
            ai: {
                title: "Menya Umufasha wawe w’Ubuzima wa AI",
                desc: "Menya Umufasha wawe w’Ubuzima wa AI"
            }
        },
        servicesCta: {
            "title": "Tangira gukoresha Serivisi z'Ubuvuzi zacu",
            "description": "Kuramo porogaramu yacu cyangwa tuvugishe uyu munsi kugirango ubone serivisi z'ubuvuzi zihuse, zizewe kandi zidahenze.",
            "downloadApp": "Kuramo Porogaramu",
            "contactUs": "Tuvugishe"
        },
        "departments2": {
            "title": "Serivisi mu Mashami Atandukanye",
            "description": "ONE HEALTHLINE CONNECT itanga serivisi z'ubuvuzi zitandukanye binyuze mu mashami yayo",
            "diagnostic": {
                "title": "Serivisi zo Gusuzuma Indwara",
                "services": {
                    "imaging": "Isuzuma ryifashisha ibikoresho by'ikoranabuhanga (X-ray, CT, MRI)",
                    "laboratory": "Igeragezwa mu Laboratwari",
                    "ecg": "Electrocardiogram (ECG/EKG)",
                    "ultrasound": "Ultrasound",
                    "endoscopy": "Endoscopy",
                    "biopsy": "Biopsy"
                }
            },
            "treatment": {
                "title": "Serivisi zo Kuvura",
                "services": {
                    "medication": "Gucunga Imiti",
                    "surgery": "Kubaga",
                    "physicalTherapy": "Kuvura hifashishijwe imyitozo ngororamubiri",
                    "radiation": "Radiation Therapy",
                    "chemotherapy": "Chemotherapy",
                    "rehab": "Serivisi zo Gusubiza Ubuzima"
                }
            },
            "preventive": {
                "title": "Ubuvuzi bwo Kwirinda",
                "services": {
                    "screenings": "Gusuzuma Ubuzima",
                    "vaccinations": "Gukingira",
                    "checkups": "Isuzuma rya buri gihe",
                    "nutrition": "Inama ku mirire",
                    "lifestyle": "Guhindura Imyitwarire y’Ubuzima",
                    "education": "Uburezi bwo Kwirinda"
                }
            },
            "specialized": {
                "title": "Ubuvuzi Bwihariye",
                "services": {
                    "chronic": "Kwitaho Indwara z'Igihe Kirekire",
                    "maternal": "Ubuzima bw'Ababyeyi n'Abana",
                    "geriatric": "Ubuzima bw’Abakuze",
                    "mental": "Ubuvuzi bw’Indwara zo Mu Mutwe",
                    "pain": "Gukemura Ibibazo by’Uburibwe",
                    "emergency": "Ubuvuzi bw’Amahutwa"
                }
            }
        }
    }
};
const LanguageProvider = ({ children })=>{
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('en');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'rw')) {
            setLanguage(savedLanguage);
        }
    }, []);
    const changeLanguage = (lang)=>{
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };
    const t = (key)=>{
        const keys = key.split('.');
        let value = translations[language];
        for (const k of keys){
            value = value?.[k];
        }
        return value || key;
    };
    const value = {
        language,
        setLanguage: changeLanguage,
        t
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/LanguageContext.tsx",
        lineNumber: 3299,
        columnNumber: 5
    }, this);
};
const useLanguage = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__0f7baf5d._.js.map