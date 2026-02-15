import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function useContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }
      await actor.submitContactForm(data.name, data.email, data.message);
    },
    onSuccess: () => {
      // Optionally invalidate any queries that depend on contact submissions
      queryClient.invalidateQueries({ queryKey: ['contactSubmissions'] });
    },
  });

  return {
    submitForm: mutation.mutateAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
