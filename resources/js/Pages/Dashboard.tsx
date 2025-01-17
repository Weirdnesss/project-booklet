import { FC } from "react"

import { AuthenticatedLayout } from "@/Layouts/authenticated-layout"
import { PageProps } from "@/types"

interface Props extends PageProps {}

const Dashboard: FC<Props> = ({ auth }) => {
	return (
		<AuthenticatedLayout
			user={auth.user}
			title="Dashboard"
		></AuthenticatedLayout>
	)
}

export default Dashboard
