import React from 'react'

import { TagProcessor } from '@/app/helpers/tag-processor'
import { useTranslation } from '@/app/hooks/useTranslation'

const CreateNewPassword = () => {
  const { t } = useTranslation()

  return (
    <div>
      {t.navigation.menu.createNewPassword}
      <div>
        {t.characterPage.getDescription('This name with no translation', 'same as species')}
        <TagProcessor
          as={'div'}
          text={t.characterPage.description}
          tags={{
            1: () => <b>{'Rick'}</b>,
            2: () => <strong>{'species'}</strong>,
          }}
        />
      </div>
    </div>
  )
}

export default CreateNewPassword
