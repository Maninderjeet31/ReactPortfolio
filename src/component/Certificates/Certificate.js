import { Carousel } from 'primereact/carousel';

function Certificate({certs}){

  const CertificateTemplate = ( data ) => {
    return (
            <div style={{ border: 'none' }} className="border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={data.logo} alt={data.title} className="w-6 shadow-2" style={{ width: '200px', height: '200px', objectFit: 'contain' }}  />
                </div>
                <div>
                    <h4 className="mb-1">{data.title}</h4>
                    <h5 className="mt-0 mb-3">{data.company}</h5>
                    <h6 className="mt-0 mb-3">Certificate Number: {data.number}</h6>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        {data.earnedOn}
                    </div>
                </div>
            </div>
        );
  }

  return (
    <div className="card flex justify-content-center">
            <Carousel value={certs} 
                    numVisible={1} 
                    numScroll={1} 
                    verticalViewPortHeight="360px"
                    itemTemplate={CertificateTemplate} 
            />
        </div>
  )
};

export default Certificate;