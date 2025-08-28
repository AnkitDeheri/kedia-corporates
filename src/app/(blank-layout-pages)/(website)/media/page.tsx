import CustomHeroBanner from '@/components/custom/herobanner/CustomHeroBanner'
import Media from '@/views/Media/page'

const ComponentName = () => {
  return (
    <>
      <CustomHeroBanner
        title={'MEDIA'}
        backgroundImage={'/images/banner/kedia-corporate-media.webp'}
        overlay='dark'
        height='medium'
        titleSize='small'
        className='mb-8'
      />

      <Media />
    </>
  )
}

export default ComponentName
