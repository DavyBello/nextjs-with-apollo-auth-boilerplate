import { IndexPageContext } from '../../contexts/pages/indexPage'

export default () => (
    <IndexPageContext.Consumer>{
        ({viewer: { me }}) => (
            <div>
                {me.name}
            </div>
        )
    }</IndexPageContext.Consumer>
)
