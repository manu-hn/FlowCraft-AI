//Dashboard Layout Props type
export type DashboardProps = {
    children: React.ReactNode;
}


// Heading Component Text
export type HeadingProps = {
    classNames: string,
    children: React.ReactNode
}



//Template type


export type FORM_TYPE = {
    label: string,
    field: string,
    name: string,
    required?: boolean,
}

export type TEMPLATE_TYPE = {
    name: string,
    desc: string,
    category: string,
    icon: string,
    slug: string,
    aiPrompt: string,
    form: Array<FORM_TYPE>,


}