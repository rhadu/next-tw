import tw, { styled } from 'twin.macro'
import { Layout } from '@/components/Layout'

const Breadcrumbs = ({ children }) => {
  return (
    <nav aria-label='Breadcrumb'>
      <ol>{children}</ol>
    </nav>
  )
}

const Crumb = ({ href, children }) => {
  return (
    <CrumbWrapper>
      <CrumbLink href={href} >{children}</CrumbLink>
    </CrumbWrapper>
  )
}

const CrumbWrapper = styled.li`
  ${tw`inline`}
  &:not(:first-of-type) {
    ${tw`ml-3`}

    &::before {
      content: '/';
      ${tw`mr-3 opacity-30`}
    }
  }
`

const CrumbLink = styled.a`
  ${tw`hover:underline font-medium`}

  ${(p=>p.bold)}

  ${({ bold }) => bold && tw`bg-blue-500`}
  
`

export default function BreadcrumbsPage() {
  return (
    <Layout>
      <Breadcrumbs>
        <Crumb href='/'>Home</Crumb>
        <Crumb href='/living'>Living Room</Crumb>
        <Crumb href='/living/couch'>Couches</Crumb>
        <Crumb href='/living/couch/sectional'>Sectionals</Crumb>
      </Breadcrumbs>
    </Layout>
  )
}
