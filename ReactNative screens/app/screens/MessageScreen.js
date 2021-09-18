import React,{useState} from 'react';
import { FlatList, View, Text } from 'react-native';
import ListItem from '../components/ListItem1';
import ListItemSeperator from '../components/ListItemSeperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';


const Messages = [
    {
        id: 1,
        title: "name",
        description: "priya",
        image: require("../../assets/download.jpg"),
    },
    {
        id: 2,
        title: "name",
        description: "madhu",
        image: require("../../assets/download.jpg"),
    },
    {
        id: 3,
        title: "name",
        description: "sandhiya",
        image: require("../../assets/download.jpg"),
    },
    {
        id: 4,
        title: "name",
        description: "sowmiya",
        image: require("../../assets/download.jpg"),
    },
    
    
];


const MessageScreen = ()=>{

     const [messages, setmessage] = useState(Messages);
     //const click = (item)
    //  console.log('im pressed', item) 
    function click(item){
        //console.log('im pressed', item)
    }
    const [refreshing, setrefreshing] = useState(false);
   
    const deleteItem=(item)=>{
        setmessage(messages.filter((itm)=>itm.id !==item.id))
    }
return(
  <FlatList data={messages}
            keyExtractor={(message)=>message.id.toString()}
            renderItem={({item})=>(
                <ListItem 
                title={item.title} 
                subtitle={item.description} 
                image={item.image}
                myPress={()=>click(item)}
                renderLeftActions={()=>(<ListItemDeleteAction onPress={()=>deleteItem(item)}></ListItemDeleteAction>)}
    />)}
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={()=>setmessage(Messages)}
   />
   
    )}


 export default MessageScreen;