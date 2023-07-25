const DynamicPage = ({params, searchParams}) => {
    console.log(searchParams)
    return <div>Dynamic Page : {params?.id}</div>
}

export default DynamicPage