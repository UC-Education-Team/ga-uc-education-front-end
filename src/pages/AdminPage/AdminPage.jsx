import CreateModule from "../CreateModule/CreateModule"
import { Card } from "react-bootstrap"

export default function AdminPage({newModule}){
    return(
        <Card> <CreateModule createModule={newModule}/></Card>
       
    )
}