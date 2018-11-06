import { IndexPageContext } from '../../contexts/pages/indexPage'

export default props => (
    <IndexPageContext>{
        ({viewer: { me }}) => (
            <div>
                {me.name}
            </div>
        )
    }</IndexPageContext>
)
