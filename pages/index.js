import Head from "next/head";

export default function Home() {
  const date = new Date()
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
            <p>VONT AB</p>
            <p>BOX 6232, 10234 Stockholm, Sweden</p>
            <p>VAT NO. SE559224164901</p>
          </div>
        </div>
        <div className="text-center font-bold">
          <p className="text-3xl py-4">05/01/1</p>
        </div>
        <div>
          <p>Invoice date: {date.toISOString().split('T')[0]}</p>
          <p>Payment due: {new Date(date.setDate(date.getDate()+10)).toISOString().split('T')[0]}</p>
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
          <tr className="py-2 border-b h-12">
            <td className="px-4">1</td>
            <td className="px-4">Development of Vont's new web shop</td>
            <td className="px-4">80.5</td>
            <td className="px-4">hour</td>
            <td className="px-4">$35</td>
            <td className="px-4 whitespace-nowrap">0.00</td>
            <td className="px-4 whitespace-nowrap">0.00</td>
            <td className="px-4">$2,817.50</td>
          </tr>
        </table>
        <div className="grid grid-cols-2">
          <p>Time of issue: {new Date().toISOString()}</p>
          <table>
            <tr>
              <td>SUBTOTAL VALUE:</td>
              <td></td>
              <td>21,158.29 Kn</td>
            </tr>
            <tr>
              <td>SUBTOTAL VALUE:</td>
              <td></td>
              <td>2,817.50 USD</td>
            </tr>
            <tr>
              <td>VAT BASIS 0,00% :</td>
              <td>21,158.29 VAT</td>
              <td>0.00 Kn</td>
            </tr>
            <tr>
              <td>VAT BASIS 0,00% :</td>
              <td>2,817.50 VAT</td>
              <td>0.00 USD</td>
            </tr>
            <tr>
              <td>TOTAL:</td>
              <td></td>
              <td>21,158.29 Kn</td>
            </tr>
            <tr className="font-semibold">
              <td>TOTAL:</td>
              <td></td>
              <td>2,817.50 USD</td>
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
