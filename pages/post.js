import Layout from '../components/Layout.js'

export default (props) => (
    <Layout>
       <h1>{props.url.query.id}</h1>
       <p>This is the post page.</p>
    </Layout>
)