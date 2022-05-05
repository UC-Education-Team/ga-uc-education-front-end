import CreateModule from "../CreateModule/CreateModule"
import CreateLesson from '../CreateLesson/CreateLesson'
import { Card, Container } from "react-bootstrap"

export default function AdminPage({newModule, createLesson}){
    return(
        <Container>
          <Card> <CreateModule createModule={newModule}/></Card>  
          <Card> <CreateLesson createLesson={createLesson}/></Card>  
        </Container>
        
       
    )
}