export const userdata_update = (data) => {
    console.log(data)
    return {
        type : 'USERDATA',
        payload:data
    }
};
