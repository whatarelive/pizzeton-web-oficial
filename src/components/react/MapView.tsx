export default function MapView() {
    return (
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1982.6530520228068!2d-82.27098858416873!3d23.128473033603456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d23.1285986!2d-82.2704456!5e0!3m2!1sen!2scu!4v1733959342775!5m2!1sen!2scu" 
            className="min-w-[272px] min-h-[272px] md:max-w-[300px] md:max-h-[300px] lg:min-w-[440px] lg:min-h-[340px] rounded-xl z-0"
            allowFullScreen 
            loading="lazy" 
            style={{ border: 0 }}   
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    )
};

