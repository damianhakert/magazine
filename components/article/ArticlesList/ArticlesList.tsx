import { ArticleCard } from '..'
import cn from 'classnames'
import List from '@components/icons/List'

type Props = {
  articles: TArticle[]
  title: string
  sort?: boolean
}

const ArticlesList = ({ articles, title, sort = false }: Props) => {
  return (
    <section>
      <div
        className={cn('py-2', {
          ['flex justify-between items-center']: sort === true,
        })}
      >
        <h6 className="uppercase">{title}</h6>
        {sort && (
          <button>
            <List />
          </button>
        )}
      </div>
      {articles.map((article) => (
        <ArticleCard article={article} key={article.slug} />
      ))}
    </section>
  )
}

export default ArticlesList
