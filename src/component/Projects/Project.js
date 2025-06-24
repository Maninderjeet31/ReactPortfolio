import { Carousel } from 'primereact/carousel';

function Project({projects}){

  const ProjectsTemplate = ( data ) => {
    return (
            <div style={{ border: 'none' }} className="border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    {/* IMAGE */}
                    <img src='dev_coding.png' alt={data.title} className="w-6 shadow-2" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
                </div>
                <div>
                    <div className="mb-3">
                        <h2 className="fw-bolder">{data.id}. {data.title}</h2>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        {data.description}
                    </div>
                </div>
            </div>
        );
  }

  return (
    <div className="card flex justify-content-center">
            <Carousel value={projects} 
                    numVisible={1} 
                    numScroll={1} 
                    verticalViewPortHeight="360px"
                    itemTemplate={ProjectsTemplate} 
            />
        </div>
  )
};

export default Project;