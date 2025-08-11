"use client";

import { useState } from "react";
import { MapPin, Clock, Star, Upload, Truck, Package } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";
import { useLanguage } from "@/contexts/LanguageContext";

const pharmacies = [
  { 
    id: 1, 
    name: "UBWIZA Pharmacy", 
    address: "KN 4 Ave, Kigali", 
    hours: "24/7", 
    rating: 4.8,
    services: ["Prescription Filling", "Drug Consultation", "Home Delivery"],
    insurance: ["Mutuelle", "RAMA", "MMI"]
  },
  { 
    id: 2, 
    name: "Mama Teta Pharmacy", 
    address: "Kimisagara, Kigali", 
    hours: "8AM - 10PM", 
    rating: 4.6,
    services: ["Prescription Filling", "Health Products", "Emergency Drugs"],
    insurance: ["Mutuelle", "RSSB", "Cash"]
  },
  { 
    id: 3, 
    name: "Kigali Health Pharmacy", 
    address: "City Center, Kigali", 
    hours: "7AM - 11PM", 
    rating: 4.7,
    services: ["Prescription Filling", "Medical Supplies", "Delivery"],
    insurance: ["All Insurance Types"]
  }
];

export default function PharmacyOrders() {
  const { t } = useLanguage();

  const [step, setStep] = useState(1);
  const [selectedPharmacy, setSelectedPharmacy] = useState<typeof pharmacies[0] | null>(null);

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">{t("pharmacyOrders.title")}</h1>
        <p className="text-muted-foreground">{t("pharmacyOrders.subtitle")}</p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <div key={num} className={`flex items-center ${num !== 8 ? "flex-1" : ""}`}>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                step >= num ? "bg-healthcare-primary text-black" : "bg-muted text-muted-foreground"
              }`}
            >
              {num}
            </div>
            {num !== 8 && (
              <div className={`flex-1 h-1 mx-1 ${step > num ? "bg-healthcare-primary" : "bg-muted"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Choose Pharmacy */}
      {step === 1 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t("pharmacyOrders.steps.choosePharmacy")}</h2>
          <div className="grid gap-4">
            {pharmacies.map((pharmacy) => (
              <div
                key={pharmacy.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedPharmacy?.id === pharmacy.id
                    ? "border-healthcare-primary bg-healthcare-primary/10"
                    : "border-border hover:border-healthcare-primary/50"
                }`}
                onClick={() => setSelectedPharmacy(pharmacy)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{pharmacy.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {pharmacy.address}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {pharmacy.hours}
                    </div>
                    <div className="flex items-center mt-2">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{pharmacy.rating}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">{t("pharmacyOrders.services")}:</div>
                    <div className="text-xs space-y-1">
                      {pharmacy.services.map((service) => (
                        <div key={service} className="bg-muted px-2 py-1 rounded">
                          {t(`pharmacyOrders.servicesList.${service.replace(/\s/g, "")}`)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={nextStep}
            disabled={!selectedPharmacy}
            className="mt-6 bg-healthcare-primary text-black px-6 py-2 rounded-lg disabled:opacity-50"
          >
            {t("common.continue")}
          </button>
        </HealthCard>
      )}

      {/* Step 2: Pharmacy Profile */}
      {step === 2 && selectedPharmacy && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t("pharmacyOrders.steps.pharmacyProfile")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">{selectedPharmacy.name}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {selectedPharmacy.address}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {selectedPharmacy.hours}
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-500" />
                  {selectedPharmacy.rating} {t("pharmacyOrders.rating")}
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">{t("pharmacyOrders.insuranceAccepted")}:</h4>
              <div className="space-y-1">
                {selectedPharmacy.insurance.map((ins) => (
                  <span
                    key={ins}
                    className="inline-block bg-success-100 text-success-700 px-2 py-1 rounded text-xs mr-2"
                  >
                    {ins}
                  </span>
                ))}
              </div>
              <h4 className="font-medium mb-2 mt-4">{t("pharmacyOrders.services")}:</h4>
              <div className="space-y-1">
                {selectedPharmacy.services.map((service) => (
                  <div key={service} className="text-sm">
                    • {t(`pharmacyOrders.servicesList.${service.replace(/\s/g, "")}`)}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">
              {t("common.back")}
            </button>
            <button onClick={nextStep} className="bg-healthcare-primary text-black px-6 py-2 rounded-lg">
              {t("common.continue")}
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 3: Upload Prescription */}
      {step === 3 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t("pharmacyOrders.steps.uploadPrescription")}</h2>
          <div className="space-y-6">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-medium mb-2">{t("pharmacyOrders.uploadEPrescription")}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t("pharmacyOrders.dragDropOrBrowse")}</p>
              <button className="bg-healthcare-primary text-black px-6 py-2 rounded-lg">
                {t("pharmacyOrders.chooseFile")}
              </button>
            </div>
            <div className="text-center text-muted-foreground">{t("common.or")}</div>
            <div>
              <h3 className="font-medium mb-4">{t("pharmacyOrders.enterMedications")}</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder={t("pharmacyOrders.medicationName")}
                  className="w-full p-3 border border-border rounded-lg"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder={t("pharmacyOrders.dosage")}
                    className="p-3 border border-border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder={t("pharmacyOrders.quantity")}
                    className="p-3 border border-border rounded-lg"
                  />
                </div>
                <button className="text-healthcare-primary text-sm">+ {t("pharmacyOrders.addMedication")}</button>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">
              {t("common.back")}
            </button>
            <button onClick={nextStep} className="bg-healthcare-primary text-black px-6 py-2 rounded-lg">
              {t("common.continue")}
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 4: Confirm Medications */}
      {step === 4 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t("pharmacyOrders.steps.confirmMedications")}</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{t("pharmacyOrders.medications.paracetamol")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("pharmacyOrders.quantity")}: 20 {t("pharmacyOrders.tablets")}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">2,000 RWF</p>
                  <button className="text-sm text-healthcare-primary">{t("pharmacyOrders.requestClarification")}</button>
                </div>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{t("pharmacyOrders.medications.amoxicillin")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("pharmacyOrders.quantity")}: 14 {t("pharmacyOrders.tablets")}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">3,500 RWF</p>
                  <button className="text-sm text-healthcare-primary">{t("pharmacyOrders.requestClarification")}</button>
                </div>
              </div>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex justify-between items-center font-medium">
                <span>{t("pharmacyOrders.total")}:</span>
                <span>5,500 RWF</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">
              {t("common.back")}
            </button>
            <button onClick={nextStep} className="bg-healthcare-primary text-black px-6 py-2 rounded-lg">
              {t("common.confirm")}
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 5: Payment & Insurance */}
      {step === 5 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t("pharmacyOrders.steps.paymentInsurance")}</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">{t("pharmacyOrders.selectPaymentMethod")}</h3>
              <div className="space-y-2">
                {[
                  "Mobile Money",
                  "Bank Transfer",
                  "Insurance Coverage",
                  "Cash on Delivery",
                ].map((method) => (
                  <label
                    key={method}
                    className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-muted"
                  >
                    <input type="radio" name="payment" className="mr-3" />
                    {t(`pharmacyOrders.paymentMethods.${method.replace(/\s/g, "")}`)}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3">{t("pharmacyOrders.insuranceDetails")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="p-3 border border-border rounded-lg">
                  <option>{t("pharmacyOrders.selectInsurance")}</option>
                  <option>Mutuelle de Santé</option>
                  <option>RAMA</option>
                  <option>MMI</option>
                </select>
                <input
                  type="text"
                  placeholder={t("pharmacyOrders.policyNumber")}
                  className="p-3 border border-border rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">
              {t("common.back")}
            </button>
            <button onClick={nextStep} className="bg-healthcare-primary text-black px-6 py-2 rounded-lg">
              {t("pharmacyOrders.processPayment")}
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 6: Delivery Options */}
      {step === 6 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t("pharmacyOrders.steps.deliveryOptions")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg cursor-pointer hover:border-healthcare-primary">
              <div className="flex items-center mb-3">
                <Package className="w-6 h-6 mr-3 text-healthcare-primary" />
                <h3 className="font-medium">{t("pharmacyOrders.pickupAtPharmacy")}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{t("pharmacyOrders.pickupDetails")}</p>
            </div>
            <div className="p-4 border rounded-lg cursor-pointer hover:border-healthcare-primary">
              <div className="flex items-center mb-3">
                <Truck className="w-6 h-6 mr-3 text-healthcare-primary" />
                <h3 className="font-medium">{t("pharmacyOrders.homeDelivery")}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{t("pharmacyOrders.homeDeliveryDetails")}</p>
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium mb-2">{t("pharmacyOrders.deliveryAddress")}</label>
            <textarea
              placeholder={t("pharmacyOrders.enterDeliveryAddress")}
              className="w-full p-3 border border-border rounded-lg h-20"
            ></textarea>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">
              {t("common.back")}
            </button>
            <button onClick={nextStep} className="bg-healthcare-primary text-black px-6 py-2 rounded-lg">
              {t("common.continue")}
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 7: Confirmation & Tracking */}
      {step === 7 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t("pharmacyOrders.steps.orderConfirmation")}</h2>
          <div className="space-y-6">
            <div className="p-4 bg-success-50 border border-success-200 rounded-lg">
              <h3 className="font-medium text-success-700 mb-2">{t("pharmacyOrders.orderPlacedSuccess")}</h3>
              <p className="text-sm text-success-600">{t("pharmacyOrders.orderId")}: PHR-2024-001</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">{t("pharmacyOrders.orderStatus")}</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-success-500 rounded-full mr-3"></div>
                  <span className="text-sm">{t("pharmacyOrders.status.orderReceived")}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-muted rounded-full mr-3"></div>
                  <span className="text-sm text-muted-foreground">{t("pharmacyOrders.status.approvedByPharmacy")}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-muted rounded-full mr-3"></div>
                  <span className="text-sm text-muted-foreground">{t("pharmacyOrders.status.readyForPickup")}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={prevStep} className="px-6 py-2 border border-border rounded-lg">
              {t("common.back")}
            </button>
            <button onClick={nextStep} className="bg-healthcare-primary text-black px-6 py-2 rounded-lg">
              {t("pharmacyOrders.viewHistory")}
            </button>
          </div>
        </HealthCard>
      )}

      {/* Step 8: Order History */}
      {step === 8 && (
        <HealthCard className="p-6">
          <h2 className="text-xl font-semibold mb-4">{t("pharmacyOrders.steps.orderHistory")}</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{t("pharmacyOrders.orders.order1.id")}</h3>
                  <p className="text-sm text-muted-foreground">{t("pharmacyOrders.orders.order1.pharmacy")}</p>
                  <p className="text-sm text-muted-foreground">{t("pharmacyOrders.orders.order1.date")}</p>
                  <div className="mt-2">
                    <p className="text-xs">{t("pharmacyOrders.orders.order1.items.paracetamol")}</p>
                    <p className="text-xs">{t("pharmacyOrders.orders.order1.items.amoxicillin")}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 bg-success-100 text-success-700 text-xs rounded">
                    {t("pharmacyOrders.orders.order1.status")}
                  </span>
                  <p className="text-sm font-medium mt-1">5,500 RWF</p>
                  <button className="text-xs text-healthcare-primary mt-1">{t("pharmacyOrders.viewReceipt")}</button>
                </div>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{t("pharmacyOrders.orders.order2.id")}</h3>
                  <p className="text-sm text-muted-foreground">{t("pharmacyOrders.orders.order2.pharmacy")}</p>
                  <p className="text-sm text-muted-foreground">{t("pharmacyOrders.orders.order2.date")}</p>
                  <div className="mt-2">
                    <p className="text-xs">{t("pharmacyOrders.orders.order2.items.ibuprofen")}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 bg-success-100 text-success-700 text-xs rounded">
                    {t("pharmacyOrders.orders.order2.status")}
                  </span>
                  <p className="text-sm font-medium mt-1">2,000 RWF</p>
                  <button className="text-xs text-healthcare-primary mt-1">{t("pharmacyOrders.viewReceipt")}</button>
                </div>
              </div>
            </div>
          </div>
          <button className="mt-6 bg-healthcare-primary text-black px-6 py-2 rounded-lg">
            {t("pharmacyOrders.placeNewOrder")}
          </button>
        </HealthCard>
      )}
    </div>
  );
}
