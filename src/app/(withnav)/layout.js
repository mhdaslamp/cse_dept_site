import Navbar from "@/components/Navbar";

function WithoutLayout({ children }){
    return( <>
        <Navbar />
        {children}
    </>
    )
}

export default WithoutLayout