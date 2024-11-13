
export default async function Skills(){
    await new Promise((resolve)=>{
        setTimeout(resolve, 2000);
    })
    return(
        <div>
            <h1 className=" bg-cyan-100 text-center font-serif text-2xl flex-row rounded-lg">Skills</h1>
         <li className="">Electrical Technician</li>
         <li>AutoCad</li>
         <li>Artificial Intelligence</li>
         <p className="text-center text-2xl font-serif bg-cyan-200">Speciality</p>
         <li>TypeScript & javaScript</li>
         <li>MS Office</li>
         <li> Troubleshooting</li>
        </div>
    )
}