// import { Link } from 'react-router-dom'
// import { removeForm } from '../../actions/form'
// import { useAppSelector } from '../../hooks'
// import { type AuthProps } from '../../reducers/auth/types'
import { type FormTableType, type FormType } from '../../reducers/form/types'
import SingleCompanyForm from './SingleCompanyForm'

// interface Props {
//   company: string
//   formTable: {
//     _id: number
//     responses: string[]
//     body: {
//       title?: string
//       body: string
//       skills: any
//     }
//   }
//   admins: any
//   name: any
// }

// const CompanyForms: React.FC<{ form: FormType }> = ({ form }) => {
//   const auth: AuthProps = useAppSelector((state) => state.auth)

//   const { _id, company, formTable, admins } = form

//   const setUpBody = formTable?.body?.length > 100 ? `${formTable.body.substring(0, 97)}...` : body.body

//   return (
//     <div className='formItem bg-white'>
//       <div>
//         <h3>{name}</h3>
//       </div>
//       <div>
//         <Link to={`/forms/post/${company}/${_id}`}>
//           <h3>Check that position</h3>
//         </Link>
//         <h1>{body?.title}</h1>
//         <h2>
//           Skills:
//           {body?.skills}
//         </h2>
//         <div className='marginUpDown-1 hide-sm'>{setUpBody}</div>
//         <Link to={`/api/forms/${company}/${_id}`}>
//           <h4>Apply for that position</h4>
//         </Link>
//       </div>
//       <div>
//         {!admins.includes(auth.user._id) ? null : (
//           <>
//             <p className='hide-sm'>
//               Form responses:
//               {responses.length}
//             </p>
//             <Link to={`/api/forms/res/${company}/${_id}`}>
//               <h4>Check responses</h4>
//             </Link>
//             <button
//               onClick={() => removeForm(company, _id)}
//               type='button'
//               className='btn btn-danger'
//             >
//               Remove &nbsp;
//               <i className='fas fa-trash-alt' />
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   )
// }

const CompanyForms: React.FC<{ form: FormType }> = ({ form }) => {
  if (!form.formTable) {
    return <>Forms not found</>
  }

  return (
    <>
      {form.formTable.map((formInformation: FormTableType, key: number) => {
        return (
          <SingleCompanyForm
            key={key}
            formBody={formInformation.body}
            company={form.company}
            _id={formInformation._id}
          />
        )
      })}
    </>
  )
}

export default CompanyForms
