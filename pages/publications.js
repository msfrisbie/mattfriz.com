import Header from "@components/Header";
import PublicationItem from "@components/PublicationItem";
import angular2CookbookCover from "../public/assets/images/angular-2-cookbook.webp";
import angularCookbookCover from "../public/assets/images/angularjs-web-application-development-cookbook.webp";
import buildingBrowserExtensionsCover from "../public/assets/images/bbx_cover_resized.jpg";
import introductionToModernClientSideProgrammingCover from "../public/assets/images/introduction-to-modern-client-side-programming.webp";
import learningAngularjsCover from "../public/assets/images/learning-angularjs.webp";
import maintainingWebApplicationsCover from "../public/assets/images/maintaining-web-applications.webp";
import professionalJavaScriptForWebDevelopersCover from "../public/assets/images/professional-javascript-for-web-developers-4e_resized.webp";

const publications = [
  {
    url: "https://www.amazon.com/gp/product/148428724X",
    image: buildingBrowserExtensionsCover,
    title: "Building Browser Extensions",
    bookClass: "tall-three-d",
  },
  {
    url: "https://www.amazon.com/Professional-JavaScript-Developers-Matt-Frisbie/dp/1119366445",
    image: professionalJavaScriptForWebDevelopersCover,
    title: "Professional JavaScript for Web Developers - 4th edition",
    bookClass: "three-d",
  },
  {
    url: "https://www.amazon.com/Angular-2-Cookbook-Matt-Frisbie/dp/1785881922",
    image: angular2CookbookCover,
    title: "Angular 2 Cookbook",
    bookClass: "three-d",
  },
  {
    url: "https://www.amazon.com/AngularJS-Web-Application-Development-Cookbook/dp/1783283351",
    image: angularCookbookCover,
    title: "AngularJS Web Application Development Cookbook",
    bookClass: "three-d",
  },
  {
    url: "https://www.amazon.com/AngularJS-Maintaining-Applications-Rodrigo-Branas-ebook/dp/B01EVJ1LGW",
    image: maintainingWebApplicationsCover,
    title: "Maintaining Web Applications",
    bookClass: "three-d",
  },
  {
    url: "https://www.oreilly.com/library/view/introduction-to-modern/9781771374842/",
    image: introductionToModernClientSideProgrammingCover,
    title: "Introduction to Modern Client-Side Programming",
    bookClass: "video",
  },
  {
    url: "https://www.oreilly.com/library/view/learning-angular-js/9781771372138/",
    image: learningAngularjsCover,
    title: "Learning AngularJS",
    bookClass: "video",
  },
];

export default function Publications() {
  return (
    <div className="p-4">
      <Header
        title="Publications - mattfriz.com"
        url="https://www.mattfriz.com/publications"
        description="Publications by Matt Frisbie"
      ></Header>

      <h1 className="text-center text-5xl mb-16">PUBLICATIONS</h1>

      <div className="flex flex-col items-center gap-20">
        {publications.map((publicationData) => (
          <PublicationItem
            key={publicationData.url}
            publicationData={publicationData}
          ></PublicationItem>
        ))}
      </div>
    </div>
  );
}
