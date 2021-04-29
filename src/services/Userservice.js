import Axios from './axioservice'

const axiosservice= new Axios();
const baseUrl ='http://fundoonotes.incubation.bridgelabz.com/api/'
const confighead= {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('id')
    },
}

class Userservice{
    Registration = (data) =>{
       return axiosservice.postMethod(`${baseUrl}user/userSignUp`,data)
    }
    Login = (data) =>{ 
       return axiosservice.postMethod(`${baseUrl}user/login`,data)
    }
    ForgotPassword = (data) =>{ 
        return axiosservice.postMethod(`${baseUrl}user/reset`,data)
    }
    AddNoteapi = (data,header) =>{
        console.log(data,header);
        return axiosservice.postMethod(`${baseUrl}notes/addNotes`,data,header)
    }
    GetNote = (data,header) =>{
        return axiosservice.getMethod(`${baseUrl}notes/getNotesList`,data,header)
    }
    UpdateNoteapi = (data,header) =>{
        return axiosservice.postMethod(`${baseUrl}notes/updateNotes`,data,header)
    }
    DeleteNoteapi = (data) =>{
        return axiosservice.postMethod(`${baseUrl}notes/trashNotes`,data,confighead)
    }
    ColorNoteapi = (data) =>{
        return axiosservice.postMethod(`${baseUrl}notes/changesColorNotes`,data,confighead)
    }
    ArchiveNoteapi = (data) =>{
        return axiosservice.postMethod(`${baseUrl}notes/archiveNotes`,data,confighead)
    }
    GetArchiveNoteapi = (data,header) =>{
        return axiosservice.getMethod(`${baseUrl}notes/getArchiveNotesList`,data,header)
    }
    GetTrashNoteapi = (data,header) =>{
        return axiosservice.getMethod(`${baseUrl}notes/getTrashNotesList`,data,header)
    }
}

export default Userservice;