import React from 'react';
import Firestore from '@google-cloud/firestore';

export default async function CompDataTemp() {
    const firestore = new Firestore();
    document = firestore.doc('posts/intro-to-firestore');

    dummyProps = {
        doc: document,
        docData: {
            title: 'Welcome to Firestore',
            body: 'Hello World',
        },
        docChanges: {
            body: 'My first Firestore app',
        }
    }

    state = { 
        doc : ' ',
        docData : {},
        docChanges: '',
        
    }

    
    console.log('Document created');
    
    createDoc = () => {
        //Create new firebase document
        this.setState({
            ...state,
            doc: document
        })
    }

    setData = async () => {
        // Enter new data into the document.
        try {
            const dataSet = await document.set(this.props.docData);
            this.setState({
                ...this.state,
                docDate: dataSet,
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Non async version
    // setData = document.set(this.props.docData)
    //     .then(dataSet => {
    //         this.setState({
    //             ...this.state,
    //             docData: dataSet
    //         })
    //         console.log('Entered new data into the document', dataSet)
    //     }) .catch(error => console.log(error) )
    
    readDoc = async () => {
        // Read the document.
        try {
            let theDoc = await document.get();
            console.log('Read the document', theDoc);
        } catch (error) {
            console.log(error)
        }
    }
    

    
    updateData = async () => {
        // Update an existing document.
        try {
            const dataUpdate = await document.update ({docChanges});
            this.setState({
                ...this.state,
                docChanges: dataUpdate
            })
            console.log('Updated an existing document');
        } catch (error) {
            console.log(error);
        }
        
    }
    

    deleteDoc = async () => {
        // Delete the document.
        try {
            let del = await document.delete();
            console.log('Deleted the document', del);
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div>
        
        </div>
)
}

