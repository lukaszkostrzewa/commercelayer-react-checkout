import { PaymentMethodsContainer } from "@commercelayer/react-components"
import { useTranslation } from "react-i18next"
import "twin.macro"

interface Props {
  handleSave: () => void
  stripeKey: string
}

export const PaymentContainer: React.FC<Props> = ({
  handleSave,
  stripeKey,
  children,
}) => {
  const { t } = useTranslation()

  return (
    <PaymentMethodsContainer
      config={{
        stripePayment: {
          fonts: [
            {
              cssSrc:
                "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap",
            },
          ],
          options: {
            style: {
              base: {
                color: "#000",
                fontWeight: "400",
                fontFamily: "Manrope, sans-serif",
                ":-webkit-autofill": {
                  color: "#fce883",
                },
                "::placeholder": {
                  color: "#e0e0e0",
                },
              },
              invalid: {
                iconColor: "#FFC7EE",
                color: "#FFC7EE",
              },
            },
            hideIcon: false,
            hidePostalCode: true,
          },
          publishableKey: stripeKey,
          handleSubmit: handleSave,
          submitLabel: t("stepPayment.setPaymentMethod"),
          submitClassName:
            "inline-flex items-center justify-center w-full p-3 text-xs font-extrabold text-contrast bg-primary border border-transparent rounded-md hover:opacity-80 disabled:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 lg:w-48",
          containerClassName: "pt-1",
          submitContainerClassName: "flex justify-end pt-3",
        },
      }}
    >
      {children}
    </PaymentMethodsContainer>
  )
}
