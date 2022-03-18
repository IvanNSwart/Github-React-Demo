import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "../ReduxStore/store";

export default function Search() {
	const profileDetails = useSelector((state: RootState) => state.profiles);

	const navigate = useNavigate();
	function validateSearch(value: string) {
		let error;
		if (!value) {
			error = "Please Enter an User Name";
		}
		return error;
	}
	return (
		<>
			<div
				className="flex items-center justify-center h-screen object-fill bg-[url('./src/Assets/imgs/github.jpeg')] bg-cover
      "
			>
				<div className="h-2/6 w-2/6 bg-orange-300 rounded-3xl shadow-xl">
					<div className="flex justify-end mr-4 mt-4">
						{profileDetails.map((profile) => profile.name)}
					</div>
					<div className="flex justify-center mt-12 xl:text-3xl md:text-lg">
						<h1>Welcome to Github Search App</h1>
					</div>
					<div className="flex justify-center items-center mt-6">
						<Formik
							initialValues={{
								search: "",
							}}
							onSubmit={(values) => {
								navigate(`/search/${values.search}`);
							}}
						>
							{({ errors, touched, isValidating }) => (
								<Form>
									<Field
										name="search"
										validate={validateSearch}
										placeholder="Search A Github User"
										className=" flex justify-center  rounded  py-2 px-3 text-slate-900 leading-tight lg:text-lg sm:text-sm "
									/>
									{errors.search && touched.search && (
										<div>{errors.search}</div>
									)}
									<button
										className="flex justify-center mt-4 ml-16 bg-orange-400  py-2 px-4 rounded-xl"
										type="submit"
									>
										Search
									</button>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</>
	);
}
