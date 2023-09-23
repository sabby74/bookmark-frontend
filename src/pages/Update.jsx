import React, { useState } from 'react'
import { useLoaderData, Form } from 'react-router-dom';

const Update = () => {
    const bmark = useLoaderData();
    console.log(useLoaderData);
    const [formData, setFormData] = useState(bmark);

    const handleChange = (e) => {
        setFormData(prevState => {
            return { ...prevState, [e.target.name] : e.target.value}
        })
    }

  return (
    <div>
        <Form action={`/update/${bmark._id}`} method="post">
            <input type="input" name="title" value={formData.title} onChange={handleChange} placeholder="Enter a Title" />
            <input type="input" name="url" value={formData.url} onChange={handleChange} placeholder="Enter a URL" />
            <input type="submit" value={`Update ${bmark.title}`}/>
        </Form>
    </div>
  )
}

export default Update