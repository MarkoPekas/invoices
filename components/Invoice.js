import Head from "next/head"
import { currency } from "./utils/currency"

const Invoice = ({CompanyName, AddressLine1, AddressLine2, VatNo, InvoiceNumber, Items, CurrencyCode, TimeOfIssue, InvoiceDate, DueDate, ExchangeRate}) => {
  console.log(Items)
  const format = (val) => {
    return currency(CurrencyCode).format(val)
  }
  const total = Items.reduce((acc, item) => acc + item.Price*item.Quantity, 0)
    return (
        <div className='p-4' style={{ width:'210mm', height: '297mm' }}>
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,300' rel='stylesheet' type='text/css'/>
      </Head>
      <div className='w-full h-full flex flex-col'>
        <div className="w-full flex justify-between border-b pb-4">
          <div>
            <p className="font-semibold text-xl pb-2">Gecko Design d.o.o.</p>
            <p>Kuzminečka 53</p>
            <p>10000 Zagreb</p>
            <p>OIB: 54746473174</p>
            <p>PDV BR. HR54746473174</p>
            <p></p>
          </div>
          <div>
            <p>IBAN:HR84 2360 0001 1026 42866</p>
            <p>Zagrebačka banka d.d.</p>
          </div>
        </div>
        <div className="justify-end w-full flex pt-4">
          <div>
            <p>{CompanyName}</p>
            <p>{AddressLine1}</p>
            <p>{AddressLine2}</p>
            <p>VAT NO. {VatNo}</p>
          </div>
        </div>
        <div className="text-center font-bold">
          <p className="text-3xl py-4">{InvoiceNumber}</p>
        </div>
        <div>
          <p>Invoice date: {InvoiceDate}</p>
          <p>Payment due: {DueDate}</p>
        </div>
        <table className="rounded-lg my-16">
          <tr className="border-b h-12">
            <th className="px-4">No.</th>
            <th className="w-full">Description</th>
            <th className="px-4">Quantity</th>
            <th className="px-4">Unit</th>
            <th className="px-4">Price</th>
            <th className="px-4 whitespace-nowrap">Rebate %</th>
            <th className="px-4 whitespace-nowrap">Vat (%)</th>
            <th className="px-4">Amount</th>
          </tr>
          {Items?.map((item, i) => <tr key={i} className="py-2 border-b h-12">
            <td className="px-4">{i+1}</td>
            <td className="px-4">{item.Desription}</td>
            <td className="px-4">{item.Quantity}</td>
            <td className="px-4">{item.Unit}</td>
            <td className="px-4">{format(item.Price)}</td>
            <td className="px-4 whitespace-nowrap">0.00</td>
            <td className="px-4 whitespace-nowrap">0.00</td>
            <td className="px-4">{format(item.Quantity*item.Price)}</td>
          </tr>)}
        </table>
        <div className="grid grid-cols-2">
          <p>Time of issue: {TimeOfIssue}</p>
          <table>
            <tr>
              <td>SUBTOTAL VALUE:</td>
              <td></td>
              <td>{currency("hrk").format(total*ExchangeRate)}</td>
            </tr>
            <tr>
              <td>SUBTOTAL VALUE:</td>
              <td></td>
              <td>{format(total)}</td>
            </tr>
            <tr>
              <td>VAT BASIS 0,00% :</td>
              <td>{currency('HRK').format(total*ExchangeRate)} VAT</td>
              <td>0.00 Kn</td>
            </tr>
            <tr>
              <td>VAT BASIS 0,00% :</td>
              <td>{format(total)} VAT</td>
              <td>0.00 USD</td>
            </tr>
            <tr>
              <td>TOTAL:</td>
              <td></td>
              <td>{currency('HRK').format(total*ExchangeRate)}</td>
            </tr>
            <tr className="font-semibold">
              <td>TOTAL:</td>
              <td></td>
              <td>{format(total)}</td>
            </tr>
          </table>
        </div>
        <div className="flex-1 flex flex-col justify-end">
          <div>
            <p>Gecko Design d.o.o.</p>
            <p>Kuzminečka 53</p>
            <p>10000 Zagreb, Croatia</p>
            <p>VAT NO: HR54756473174</p>
          </div>
          <div className="my-4">
            <p>IBAN HR84 2360 0001 1026 42866</p>
            <p>SWIFT: ZABAHR2X</p>
            <p>ZAGREBAČKA BANKA D.D.</p>
            <p>Reverse charge Law on Vat Article 17</p>
          </div>
          <div className="w-full text-center">
            <p className="text-xs">Gecko Design d.o.o. Kuzminečka 53, 10000 Zagreb; OIB 54746473174; Zagrebačka banka d.d.: HR84 2360 0001 1026 42866; SWIFT: ZABAHR2X</p>
            <p className="text-xs">Društvo je upisano u Registar Trgovačkog suda Zagreb pod MBS 04796381 Temeljni kapital u iznosu od 20.000,00kn uplaćen je u cijelosti.</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Invoice