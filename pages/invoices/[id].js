import axios from "axios"
import Invoice from "../../components/Invoice"

export const getServerSideProps = async (context) => {
    const { id } = context.params
    const res = await axios.post('https://cms.themeal.me/graphql', {
        query: `
        {
          invoices {
            data {
              attributes {
                TimeOfIssue
                InvoiceDate
                DueDate
                Address {
                  CompanyName
                  AddressLine1
                  AddressLine2
                  VatNo
                }
                InvoiceNumber
                Items {
                  Desription
                  Quantity
                  Unit
                  Price
                }
                CurrencyCode
                InvoiceSlug
                ExchangeRate
              }
            }
          }
        }`
    },
    {
        headers: {
            'Authorization': 'Bearer ' + process.env.STRAPI_API_KEY
        }
    }
    )
    return {
        props: {
            invoice: res.data.data.invoices.data.find(invoice => invoice.attributes.InvoiceSlug === id).attributes
        }
    }
}

const InvoicePage = ({invoice}) => {

    return (
        <div>
            <Invoice 
            AddressLine1={invoice.Address.AddressLine1}
            AddressLine2={invoice.Address.AddressLine2}
            CompanyName={invoice.Address.CompanyName}
            DueDate={invoice.DueDate}
            InvoiceDate={invoice.InvoiceDate}
            InvoiceNumber={invoice.InvoiceNumber}
            Items={invoice.Items}
            TimeOfIssue={invoice.TimeOfIssue}
            VatNo={invoice.VatNo}
            CurrencyCode={invoice.CurrencyCode}
            ExchangeRate={invoice.ExchangeRate}
            />
        </div>
    )
}

export default InvoicePage