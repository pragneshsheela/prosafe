import CustomerListTable from '@views/apps/ecommerce/customers/list/CustomerListTable'

// Data Imports
import { getEventsData } from '@/app/server/actions'

const CustomerListTablePage = async () => {
  // Vars
  const data = await getEventsData()

  return <CustomerListTable customerData={data?.customerData} />
}

export default CustomerListTablePage
