import React from 'react'

import { TagProcessor } from '@/app/helpers/tag-processor'
import { useTranslation } from '@/app/hooks/useTranslation'
import { Typography } from '@/ui/typography/typography'

const CreateNewPassword = () => {
  const { t } = useTranslation()

  return (
    <div>
      {t.navigation.menu.createNewPassword}
      <div>
        <Typography variant="large">
          {t.characterPage.getDescription('This name with no translation', 'same as species')}
        </Typography>
        <Typography variant="h1">
          <TagProcessor
            as={'div'}
            text={t.characterPage.description}
            tags={{
              1: () => <b>{'Rick'}</b>,
              2: () => <strong>{'species'}</strong>,
            }}
          />
        </Typography>
      </div>
    </div>
  )
}

export default CreateNewPassword
