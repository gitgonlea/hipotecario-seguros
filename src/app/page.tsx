import { SaludIntegral } from '@/components/SaludIntegral/SaludIntegral';
import { Propositions } from '@/components/Propositions/Propositions';
import { Assists } from '@/components/Assists/Assists';
import { FlippingCards } from '@/components/FlippingCards/FlippingCards';
import { InsuranceInfo } from '@/components/InsuranceInfo/InsuranceInfo';
import { Benefits } from '@/components/Benefits/Benefits';
import { Faq } from '@/components/Faq/Faq';

export default function Home() {
  return (
    <>
      <SaludIntegral/>
      <Propositions/>
      <Assists/>
      <FlippingCards/>
      <InsuranceInfo/>
      <Benefits/>
      <Faq/>
    </>
  );
}