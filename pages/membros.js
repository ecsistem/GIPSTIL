/* eslint-disable prettier/prettier */
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import members from '@/data/membersData';

export default function Members() {
    console.log(members)
  return (
    <>
      <PageSEO title={`Membros - ${siteMetadata.author}`} description="Conheça nossa equipe" />
      <div className="flex flex-col items-center justify-center">
        <h1 className="my-8 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10  md:px-6 md:text-6xl md:leading-14">
          Conheça nossa equipe
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {members?.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="mb-4 h-32 w-32 rounded-full"
              />
              <h2 className="text-lg font-medium">{member.name}</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">{member.role}</p>
              <p className="text-center text-gray-500">{member.description}</p>
              <div className="mt-4 flex">
                {member.twitterUrl && (
                  <a
                    href={member.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-2 text-blue-500 hover:text-blue-700"
                  >
                    Twitter
                  </a>
                )}
                {member.linkedinUrl && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
