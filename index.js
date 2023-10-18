import {ApolloServer,gql} from "apollo-server"

const typeDefs=gql`
    type Query{
        hello:String
        products:[Product!]
        product(id:ID!):Product
    }
    type Product{
        id:ID!
        name:String!
        description:String
        quantity:Int!
        price:Float
        onSale:Boolean
    }
`
const resolvers={
    Query:{
        hello:()=>{
            return "world"
        },
        products: () =>{
            return [{
                name:"shose",
                description:"for man",
                quantity:2,
                price:12.2,
                onSale:false,
            }]
        },
        product:(parent,args,context)=>{
            console.log(args)
        }
    }
}
const server=new ApolloServer({
    typeDefs,
    resolvers
})
server.listen().then(({url})=>{
    console.log("server running ", url)
})