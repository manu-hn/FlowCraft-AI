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


export type HISTORY_TYPE = {
    id: number,
    formData: string,
    gemeiniResponse: string | null,
    templateSlug: string,
    createdBy: string, // Update this to match the results
    createdAt: string | null
}


export type USAGE_STATE_TYPE = {
    totalUsage: number
}