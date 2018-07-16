import { IndexPageContext } from '../contexts/pages/indexPage'

export default props => (
    <IndexPageContext>{
        ({viewerCandidate: { candidate }}) => (
            <div>
              {candidate.name}
            </div>
        )
    }</IndexPageContext>
)
