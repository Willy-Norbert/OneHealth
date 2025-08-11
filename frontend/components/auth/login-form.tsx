"use client"

import { useState } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Eye, EyeOff } from "lucide-react"

interface LoginFormProps {
  onToggleForm?: () => void
}

export default function LoginForm({ onToggleForm }: LoginFormProps) {
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const { login } = useAuth()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (error) setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      await login(formData.email, formData.password)
    } catch (error: any) {
      setError(error.message || t("loginForm.errorFallback"))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-900">{t("loginForm.title")}</CardTitle>
        <CardDescription className="text-gray-600">{t("loginForm.description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              {t("loginForm.emailLabel")}
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("loginForm.emailPlaceholder")}
              required
              className="bg-gray-50 border-gray-200"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              {t("loginForm.passwordLabel")}
            </label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder={t("loginForm.passwordPlaceholder")}
                required
                className="bg-gray-50 border-gray-200 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t("loginForm.signingIn")}
              </>
            ) : (
              t("loginForm.signIn")
            )}
          </Button>

          {onToggleForm && (
            <div className="text-center">
              <p className="text-sm text-gray-600">
                {t("loginForm.noAccount")}{" "}
                <button
                  type="button"
                  onClick={onToggleForm}
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  {t("loginForm.signUp")}
                </button>
              </p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
